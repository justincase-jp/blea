import {
  SecurityHubClient,
  UpdateStandardsControlCommand,
} from '@aws-sdk/client-securityhub';

type EventProps = {
  accountId: string;
  region: string;
  swroleResultPath: {
    Payload: {
      AccessKeyId: string;
      SecretAccessKey: string;
      SessionToken: string;
      Expiration: string;
    };
  };
};

const disableArnsBasicAll = process.env.disableArnsBasicAll?.split(',')!;
const disableArnsCISAll = process.env.disableArnsCISAll?.split(',')!;
const disableArnsBasicVA = process.env.disableArnsBasicVA?.split(',')!;
const disableArnsCISNotCtHome = process.env.disableArnsCISNotCtHome?.split(',')!;
const controlTowerHomeRegion = process.env.controlTowerHomeRegion!;

export async function handler(event: EventProps) {
  const { accountId, region } = event;
  const { AccessKeyId, SecretAccessKey, SessionToken } =
    event.swroleResultPath.Payload;
  const sechubClient = new SecurityHubClient({
    region: region,
    credentials: {
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretAccessKey,
      sessionToken: SessionToken,
    },
  });
  const disableArnsBasic =
    region == 'us-east-1'
      ? disableArnsBasicAll.concat(disableArnsBasicVA)
      : disableArnsBasicAll;

  for (let i = 0; i < disableArnsBasic.length; i++) {
    const arn = `arn:aws:securityhub:${region}:${accountId}:control/aws-foundational-security-best-practices/v/1.0.0/${disableArnsBasic[i]}`;
    console.log('arn:', arn);
    const params = {
      StandardsControlArn: arn,
      DisabledReason: 'disable as baseline',
      ControlStatus: 'DISABLED',
    };
    const command = new UpdateStandardsControlCommand(params);
    await sechubClient.send(command);
    // to prevent TooManyRequestsException
    await new Promise((resolve) => setTimeout(resolve, 1000));

  }

  const disableArnsCIS =
    region == controlTowerHomeRegion
      ? disableArnsCISAll
      : disableArnsCISAll.concat(disableArnsCISNotCtHome);

  for (let i = 0; i < disableArnsCIS.length; i++) {
    const arn = `arn:aws:securityhub:${region}:${accountId}:control/cis-aws-foundations-benchmark/v/1.2.0/${disableArnsCIS[i]}`;
    console.log('arn:', arn);
    const params = {
      StandardsControlArn: arn,
      DisabledReason: 'disable as baseline',
      ControlStatus: 'DISABLED',
    };
    const command = new UpdateStandardsControlCommand(params);
    await sechubClient.send(command);
    // to prevent TooManyRequestsException
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return 200;
}
