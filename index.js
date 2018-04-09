// Created by 'zapier convert'. This is just a stub - you will need to edit!

const authentication = require('./authentication');
const ConsignmentreceivedTrigger = require('./triggers/consignment_received');
const UserTrigger = require('./triggers/user');
const CreatecustomerCreate = require('./creates/create_customer');

const maybeIncludeAuth = (request, z, bundle) => {
  if (bundle.authData.access_token) {
    request.headers.Authorization = `Bearer ${bundle.authData.access_token}`;
  }
  return request;
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [maybeIncludeAuth],

  afterResponse: [],

  resources: {},

  triggers: {
    [ConsignmentreceivedTrigger.key]: ConsignmentreceivedTrigger,
    [UserTrigger.key]: UserTrigger
  },

  searches: {},

  creates: {
    [CreatecustomerCreate.key]: CreatecustomerCreate
  }
};

module.exports = App;
