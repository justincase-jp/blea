const {
  awscdk,
  javascript,
} = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'justincase-jp',
  authorAddress: '13391129+xhiroga@users.noreply.github.com',
  cdkVersion: '2.12.0',
  defaultReleaseBranch: 'main',
  name: 'blea',
  repositoryUrl: 'ssh://git@github.com/justincase-jp/blea',
  deps: [
    'cdk-constants',
  ], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  depsUpgradeOptions: {
    workflowOptions: {
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 0 * * 1']), // 毎週月曜日の朝9時
    },
  },
  devDeps: [
    '@aws-sdk/client-securityhub',
    '@aws-sdk/client-sts',
  ],
});
const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
  'coverage',
];
project.gitignore.exclude(...common_exclude);

project.synth();