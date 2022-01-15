import { aws_iam as iam, PhysicalName } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export const chatbotRole = (scope: Construct, id: string): iam.Role => {
  const role = new iam.Role(scope, 'role', {
    assumedBy: new iam.CompositePrincipal(
      new iam.ServicePrincipal('chatbot.amazonaws.com'),
    ),
    roleName: PhysicalName.GENERATE_IF_NEEDED,
    managedPolicies: [
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        'CloudWatchLogsReadOnlyAccess',
      ),
      iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchReadOnlyAccess'),
    ],
  });
  new iam.Policy(scope, 'policy', { roles: [role] });
  return role;
};
