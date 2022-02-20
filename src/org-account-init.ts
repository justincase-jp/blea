import {
  aws_stepfunctions as sfn,
  aws_stepfunctions_tasks as tasks,
  aws_iam as iam,
  Duration,
} from 'aws-cdk-lib';
import {
  ServicePrincipals,
  ManagedPolicies,
} from 'cdk-constants';

import { Construct } from 'constructs';

import { DisableSecurityhubFunction } from './lambda/disable-securityhub-function';
import { SwRoleFunction } from './lambda/sw-role-function';

export interface OrgAccountInitProps {
  readonly roleName: string;
  readonly disableArnsBasicAll: string[];
  readonly disableArnsCISAll: string[];
  readonly disableArnsBasicVA: string[];
  readonly disableArnsCISNotCtHome: string[];
  readonly controlTowerHomeRegion: string;
}

export class OrgAccountInit extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: OrgAccountInitProps,
  ) {

    super(scope, id);
    const {
      roleName,
      disableArnsBasicAll,
      disableArnsCISAll,
      disableArnsBasicVA,
      disableArnsCISNotCtHome,
      controlTowerHomeRegion,
    } = props;

    const roleLambda = new iam.Role(this, 'roleLambda', {
      assumedBy: new iam.ServicePrincipal(ServicePrincipals.LAMBDA),
      managedPolicies: [
        // https://github.com/kevinslin/cdk-constants/pull/24
        // iam.ManagedPolicy.fromAwsManagedPolicyName(ManagedPolicies.AWS_LAMBDA_FULL_ACCESS),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambda_FullAccess'),
        iam.ManagedPolicy.fromAwsManagedPolicyName(ManagedPolicies.AWS_LAMBDA_BASIC_EXECUTION_ROLE),
      ],
    });

    const policyStatementLambda = new iam.PolicyStatement({
      actions: ['sts:AssumeRole'],
      effect: iam.Effect.ALLOW,
      resources: [`arn:aws:iam::*:role/${roleName}`],
    });
    const policyDocumentLambda = new iam.PolicyDocument({
      statements: [policyStatementLambda],
    });
    new iam.Policy(this, 'policyLambda', {
      document: policyDocumentLambda,
      roles: [roleLambda],
    });

    const roleSfn = new iam.Role(this, 'roleSfn', {
      assumedBy: new iam.ServicePrincipal(ServicePrincipals.STATES),
      managedPolicies: [
        // https://github.com/kevinslin/cdk-constants/pull/24
        // iam.ManagedPolicy.fromAwsManagedPolicyName(ManagedPolicies.AWS_LAMBDA_FULL_ACCESS),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AWSLambda_FullAccess'),
      ],
    });

    const swRoleFunc = new SwRoleFunction(this, 'SwRoleFunction', {
      environment: {
        envPrefix: 'OrgAccountInitSfnStack',
        roleName: roleName,
      },
      role: roleLambda,
      timeout: Duration.seconds(30),
    });

    const disableSecurityhubFunc = new DisableSecurityhubFunction(this, 'DisableSecurityhubFunction', {
      environment: {
        disableArnsBasicAll: disableArnsBasicAll.join(','),
        disableArnsCISAll: disableArnsCISAll.join(','),
        disableArnsBasicVA: disableArnsBasicVA.join(','),
        disableArnsCISNotCtHome: disableArnsCISNotCtHome.join(','),
        controlTowerHomeRegion: controlTowerHomeRegion,
      },
      role: roleLambda,
      timeout: Duration.minutes(10),
    });

    const swRoleJob = new tasks.LambdaInvoke(this, 'SwRoleJob', {
      lambdaFunction: swRoleFunc,
      inputPath: '$',
      resultPath: '$.swRoleResultPath',
    });
    const DisableSecurityhubJob = new tasks.LambdaInvoke(this, 'DisableSecurityhubJob', {
      lambdaFunction: disableSecurityhubFunc,
      inputPath: '$',
      resultPath: '$.DisableSecurityhubResultPath',
    });
    const definition = swRoleJob.next(DisableSecurityhubJob);

    new sfn.StateMachine(this, 'StateMachine', {
      definition: definition,
      role: roleSfn,
    });
  }
}
