const testTrigger = require('./triggers/user');

const authentication = {
  // TODO: just an example stub - you'll need to complete
  type: 'oauth2',
  test: testTrigger.operation.perform,
  oauth2Config: {
    authorizeUrl: {
      method: 'GET',
      url: 'https://secure.vendhq.com/connect',
      params: {
        client_id: `${process.env.CLIENT_ID}`,
        state: '{{bundle.inputData.state}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        response_type: 'code'
      }
    },

    getAccessToken: (z, bundle) => {
      z.console.log({ authData: bundle.authData });
      const promise = z.request(`https://${bundle.authData.domain_prefix}.vendhq.com/api/1.0/token`, {
        method: 'POST',
        body: {
          code: bundle.inputData.code,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'authorization_code'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      });

      return promise.then((response) => {
        if (response.status !== 200) {
          throw new Error('Unable to fetch access token: ' + response.content);
        }

        const result = JSON.parse(response.content);
        return {
          access_token: result.access_token,
          refresh_token: result.refresh_token,
          domain_prefix: bundle.inputData.domain_prefix
        };
      });
    },
    refreshAccessToken: (z, bundle) => {
      const promise = z.request(`https://${bundle.authData.domain_prefix}.vendhq.com/api/1.0/token`, {
        method: 'POST',
        body: {
          refresh_token: bundle.authData.refresh_token,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'refresh_token'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      });

      return promise.then((response) => {
        if (response.status !== 200) {
          throw new Error('Unable to fetch access token: ' + response.content);
        }

        const result = JSON.parse(response.content);
        return {
          access_token: result.access_token,
          refresh_token: result.refresh_token,
          domain_prefix: bundle.authData.domain_prefix
        };
      });
    },
    scope: '',
    autoRefresh: true
  },
  fields: [
    { key: 'domain_prefix', type: 'string', required: false, computed: true }
  ],
  connectionLabel: '{{bundle.authData.domain_prefix}}'
};

module.exports = authentication;
