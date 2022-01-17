import { aws_iam as iam, PhysicalName } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ManagedPolicies } from 'cdk-constants';

export const chatbotRole = (scope: Construct): iam.Role => {
  const role = new iam.Role(scope, 'role', {
    assumedBy: new iam.CompositePrincipal(
      new iam.ServicePrincipal('chatbot.amazonaws.com')
    ),
    roleName: PhysicalName.GENERATE_IF_NEEDED,
    managedPolicies: [
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        ManagedPolicies.CLOUD_WATCH_LOGS_READ_ONLY_ACCESS
      ),
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        ManagedPolicies.CLOUD_WATCH_READ_ONLY_ACCESS
      ),
    ],
  });
  new iam.Policy(scope, 'policy', { roles: [role] });
  return role;
};
