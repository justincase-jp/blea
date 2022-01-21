import { aws_iam as iam, PhysicalName } from 'aws-cdk-lib';
import { ManagedPolicies } from 'cdk-constants';
import { Construct } from 'constructs';

export const chatbotRole = (scope: Construct): iam.Role => {
  const role = new iam.Role(scope, 'role', {
    assumedBy: new iam.CompositePrincipal(
      new iam.ServicePrincipal('chatbot.amazonaws.com'),
    ),
    roleName: PhysicalName.GENERATE_IF_NEEDED,
    managedPolicies: [
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        ManagedPolicies.CLOUD_WATCH_LOGS_READ_ONLY_ACCESS,
      ),
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        ManagedPolicies.CLOUD_WATCH_READ_ONLY_ACCESS,
      ),
    ],
  });
  new iam.Policy(scope, 'policy', { roles: [role] });
  return role;
};
