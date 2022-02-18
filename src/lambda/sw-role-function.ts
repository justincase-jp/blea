// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for SwRoleFunction
 */
export interface SwRoleFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/lambda/sw-role.
 */
export class SwRoleFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: SwRoleFunctionProps) {
    super(scope, id, {
      description: 'src/lambda/sw-role.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/lambda/sw-role.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}