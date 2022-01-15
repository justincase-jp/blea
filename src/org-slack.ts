import {
  aws_sns as sns,
  aws_chatbot as chatbot,
  aws_logs as logs,
  Duration,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { chatbotRole } from './resources/chatbot-role';

export interface OrgSlackProps {
  readonly snsTopic: sns.Topic;
  readonly workspaceId: string;
  readonly channelId: string;
  readonly slackChannelConfigurationName: string;
}

export class OrgSlackStack extends Construct {
  constructor(scope: Construct, id: string, props: OrgSlackProps) {
    super(scope, id);
    const { workspaceId, channelId, slackChannelConfigurationName } = props;

    const snsTopic = sns.Topic.fromTopicArn(
      this,
      'snsTopic',
      props.snsTopic.topicArn,
    );
    const role = chatbotRole(this, 'chatbotRole');
    const slackChannelId = channelId;

    new chatbot.SlackChannelConfiguration(this, 'chatbotToFatal', {
      slackChannelConfigurationName: slackChannelConfigurationName,
      slackChannelId: slackChannelId,
      slackWorkspaceId: workspaceId,
      notificationTopics: [snsTopic],
      loggingLevel: chatbot.LoggingLevel.INFO,
      logRetention: logs.RetentionDays.TWO_WEEKS,
      logRetentionRetryOptions: {
        base: Duration.seconds(5),
        maxRetries: 10,
      },
      role: role,
    });
  }
}