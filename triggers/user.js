
const getList = (z, bundle) => {
  let url = `https://${bundle.authData.domain_prefix}}.vendhq.com/api/2.0/users`;
  const responsePromise = z.request({ url });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content).data;
  });
};

module.exports = {
  key: 'user',
  noun: 'User',

  display: {
    label: 'New User',
    description: 'Triggers when a new user is added to a Vend Account.',
    hidden: true,
    important: false
  },

  operation: {
    inputFields: [],
    outputFields: [
      { key: 'account_type', type: 'string' },
      { key: 'created_at', type: 'string' },
      { key: 'deleted_at', type: 'string' },
      { key: 'display_name', type: 'string' },
      { key: 'email', type: 'string' },
      { key: 'email_verified_at', type: 'string' },
      { key: 'id', type: 'string' },
      { key: 'image_source', type: 'string' },
      { key: 'images__original', type: 'string' },
      { key: 'images__sl', type: 'string' },
      { key: 'images__sm', type: 'string' },
      { key: 'images__ss', type: 'string' },
      { key: 'images__st', type: 'string' },
      { key: 'images__standard', type: 'string' },
      { key: 'images__thumb', type: 'string' },
      { key: 'is_primary_user', type: 'string' },
      { key: 'permissions', type: 'string' },
      { key: 'restricted_outlet_id', type: 'string' },
      { key: 'restricted_outlet_ids', type: 'string' },
      { key: 'seen_at', type: 'string' },
      { key: 'target_daily', type: 'string' },
      { key: 'target_monthly', type: 'string' },
      { key: 'target_weekly', type: 'string' },
      { key: 'updated_at', type: 'string' },
      { key: 'username', type: 'string' },
      { key: 'version', type: 'string' },
      { key: 'version__max', type: 'string' },
      { key: 'version__min', type: 'string' }
    ],
    perform: getList,
    sample: {
      version: { max: 3348795492, min: 298969 },
      data: [
        {
          username: 'api@vendhq.com',
          target_daily: 1000,
          target_weekly: 10000,
          restricted_outlet_id: null,
          display_name: 'Dev Rel',
          image_source:
            'https://vendimageuploadcdn.global.ssl.fastly.net/50x50,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
          is_primary_user: true,
          created_at: '2014-06-09T21:04:50+00:00',
          restricted_outlet_ids: [],
          updated_at: '2017-05-01T20:36:40+00:00',
          target_monthly: 50000,
          seen_at: '2017-05-22T00:46:59+00:00',
          version: 3348795492,
          id: 'b1ed6158-f019-11e3-a0f5-b8ca3a64f8f4',
          account_type: 'admin',
          deleted_at: null,
          email_verified_at: null,
          email: 'api@vendhq.com',
          permissions: null
        }
      ]
    }
  }
};
