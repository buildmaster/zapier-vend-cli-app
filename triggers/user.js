// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const getList = (z, bundle) => {
  let url = 'https://{{domain_prefix}}.vendhq.com/api/2.0/users';
  url = replaceVars(url, bundle);

  const responsePromise = z.request({ url });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content);
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
      {
        key: 'data',
        type: 'string'
      },
      {
        key: 'data[]account_type',
        type: 'string'
      },
      {
        key: 'data[]created_at',
        type: 'string'
      },
      {
        key: 'data[]deleted_at',
        type: 'string'
      },
      {
        key: 'data[]display_name',
        type: 'string'
      },
      {
        key: 'data[]email',
        type: 'string'
      },
      {
        key: 'data[]email_verified_at',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string'
      },
      {
        key: 'data[]image_source',
        type: 'string'
      },
      {
        key: 'data[]images__original',
        type: 'string'
      },
      {
        key: 'data[]images__sl',
        type: 'string'
      },
      {
        key: 'data[]images__sm',
        type: 'string'
      },
      {
        key: 'data[]images__ss',
        type: 'string'
      },
      {
        key: 'data[]images__st',
        type: 'string'
      },
      {
        key: 'data[]images__standard',
        type: 'string'
      },
      {
        key: 'data[]images__thumb',
        type: 'string'
      },
      {
        key: 'data[]is_primary_user',
        type: 'string'
      },
      {
        key: 'data[]permissions',
        type: 'string'
      },
      {
        key: 'data[]restricted_outlet_id',
        type: 'string'
      },
      {
        key: 'data[]restricted_outlet_ids',
        type: 'string'
      },
      {
        key: 'data[]seen_at',
        type: 'string'
      },
      {
        key: 'data[]target_daily',
        type: 'string'
      },
      {
        key: 'data[]target_monthly',
        type: 'string'
      },
      {
        key: 'data[]target_weekly',
        type: 'string'
      },
      {
        key: 'data[]updated_at',
        type: 'string'
      },
      {
        key: 'data[]username',
        type: 'string'
      },
      {
        key: 'data[]version',
        type: 'string'
      },
      {
        key: 'version__max',
        type: 'string'
      },
      {
        key: 'version__min',
        type: 'string'
      }
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
          images: {
            thumb:
              'https://vendimageuploadcdn.global.ssl.fastly.net/160,fit,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
            ss:
              'https://vendimageuploadcdn.global.ssl.fastly.net/50x50,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
            standard:
              'https://vendimageuploadcdn.global.ssl.fastly.net/350,fit,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
            sm:
              'https://vendimageuploadcdn.global.ssl.fastly.net/100x100,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
            sl:
              'https://vendimageuploadcdn.global.ssl.fastly.net/150x150,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
            st:
              'https://vendimageuploadcdn.global.ssl.fastly.net/40x40,q90/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg',
            original:
              'https://vendimageuploadcdn.global.ssl.fastly.net/1920,fit/vend-images/user/original/1/b/1ba1099aecfbbcbdfc4aa8efb136507f99a3c0d9.jpg'
          },
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
