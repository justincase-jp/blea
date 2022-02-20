
import {
  aws_cloudformation as cloudformation,
} from 'aws-cdk-lib';

import { Construct } from 'constructs';

export interface OrgRoleStackSetProps {
  readonly auditAccountID: string;
  readonly stackInstancesGroup: cloudformation.CfnStackSet.StackInstancesProperty;
  readonly roleName: string;
}

export class OrgRoleStackSet extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: OrgRoleStackSetProps,
  ) {
    super(scope, id);
    const { auditAccountID, stackInstancesGroup, roleName } = props;

    new cloudformation.CfnStackSet(this, 'BleaSWRoleStackSets', {
      stackSetName: 'BleaSWRoleStackSets',
      permissionModel: 'SERVICE_MANAGED',
      autoDeployment: {
        enabled: true,
        retainStacksOnAccountRemoval: false,
      },
      capabilities: [
        'CAPABILITY_IAM',
        'CAPABILITY_NAMED_IAM',
      ],
      stackInstancesGroup: [stackInstancesGroup],
      parameters: [
        {
          parameterKey: 'auditAccountID',
          parameterValue: auditAccountID,
        }, {
          parameterKey: 'roleName',
          parameterValue: roleName,
        },
      ],

      templateBody: `
AWSTemplateFormatVersion: "2010-09-09"
Description: A template for iam
Parameters:
  auditAccountID:
    Type: String
    Default: xxxxxxxxx
  roleName:
    Type: String
    Default: swrole-from-audit
Resources:
  role:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: "Allow"
            Principal:
              AWS:
                - !Sub arn:aws:iam::${auditAccountID}:root
            Action:
              - "sts:AssumeRole"
      RoleName: !Ref roleName
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/AdministratorAccess
            `,
    });
  }
}
