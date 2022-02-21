import { App, Stack, aws_sns as sns } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { OrgSlack } from "../src";

test("OrgSlack", () => {
  const app = new App();
  const stack = new Stack(app, "test-stack");

  const slackWorkspaceId = "testSlackWorkspaceId";
  const slackChannelId = "testSlackChannelId";
  const slackChannelConfigurationName = "testSlackChannelConfigurationName";
  const testSnsTopic = new sns.Topic(stack, "test-topic");

  new OrgSlack(stack, "test", {
    snsTopic: [testSnsTopic],
    workspaceId: slackWorkspaceId,
    channelId: slackChannelId,
    slackChannelConfigurationName: slackChannelConfigurationName,
  });

  const template = Template.fromStack(stack);
  template.resourceCountIs("AWS::Chatbot::SlackChannelConfiguration", 1);

  template.hasResourceProperties("AWS::Chatbot::SlackChannelConfiguration", {
    SlackWorkspaceId: slackWorkspaceId,
    SlackChannelId: slackChannelId,
    ConfigurationName: slackChannelConfigurationName,
  });
});
