import {
  STSClient,
  AssumeRoleCommand,
  // AssumeRoleCommandOutput,
} from '@aws-sdk/client-sts';

const stsClient = new STSClient({ region: process.env.AWS_REGION! });
const envPrefix = process.env.envPrefix!;
const roleName = process.env.roleName!;
type EventProps = {
  accountId: string;
};
export async function handler(event: EventProps) {
  const { accountId } = event;
  const roleArn = `arn:aws:iam::${accountId}:role/${roleName}`;
  const params = {
    RoleArn: roleArn,
    RoleSessionName: `${envPrefix}-role-session`,
    DurationSeconds: 900,
  };
  const command = new AssumeRoleCommand(params);
  // let res: AssumeRoleCommandOutput;
  const res = await stsClient.send(command);

  return res.Credentials;
}
