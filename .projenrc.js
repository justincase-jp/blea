const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'justincase-jp',
  authorAddress: '13391129+xhiroga@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'blea',
  repositoryUrl: 'ssh://git@github.com/justincase-jp/blea',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    '@types/jest',
    '@types/node',
    'aws-cdk-lib',
    'constructs',
    'jest',
    'ts-jest',
    'typescript',
  ],
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);

project.synth();