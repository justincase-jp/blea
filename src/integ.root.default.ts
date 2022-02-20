import { App, Stack } from 'aws-cdk-lib';
import {
  OrgRoleStackSet,
} from './index';

const app = new App();
const stack = new Stack(app, 'MyStack');

const roleName = 'swrole-from-blea';
const auditAccountId = '123412341234';
const auditRegion = 'ap-northeast-1';

new OrgRoleStackSet(stack, 'OrgRoleStackSet', {
  auditAccountID: auditAccountId,
  roleName: roleName,
  stackInstancesGroup: {
    regions: [auditRegion],
    deploymentTargets: {
      organizationalUnitIds: ['r-123'],
    },
  },
});
