const makeRequest = (z, bundle) => {
  let url = `https://${bundle.authData.domain_prefix}.vendhq.com/api/2.0/customers`;

  const responsePromise = z.request({
    url: url,
    method: 'POST',
    body: bundle.inputData
  });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content).data;
  });
};

module.exports = {
  key: 'create_customer',
  noun: 'Customer',

  display: {
    label: 'Create Customer',
    description: 'Creates a new customer.',
    hidden: false,
    important: true
  },

  operation: {
    inputFields: [
      {
        key: 'first_name',
        label: 'First Name',
        type: 'string',
        required: true
      },
      {
        key: 'last_name',
        label: 'Last Name',
        type: 'string',
        required: true
      }
    ],
    outputFields: [
      { key: 'balance', type: 'string' },
      { key: 'company_name', type: 'string' },
      { key: 'contact_source', type: 'string' },
      { key: 'created_at', type: 'string' },
      { key: 'custom_field_1', type: 'string' },
      { key: 'custom_field_2', type: 'string' },
      { key: 'custom_field_3', type: 'string' },
      { key: 'custom_field_4', type: 'string' },
      { key: 'customer_code', type: 'string' },
      { key: 'customer_group_id', type: 'string' },
      { key: 'date_of_birth', type: 'string' },
      { key: 'deleted_at', type: 'string' },
      { key: 'do_not_email', type: 'string' },
      { key: 'email', type: 'string' },
      { key: 'enable_loyalty', type: 'string' },
      { key: 'fax', type: 'string' },
      { key: 'first_name', type: 'string' },
      { key: 'gender', type: 'string' },
      { key: 'id', type: 'string' },
      { key: 'last_name', type: 'string' },
      { key: 'loyalty_balance', type: 'string' },
      { key: 'mobile', type: 'string' },
      { key: 'name', type: 'string' },
      { key: 'note', type: 'string' },
      { key: 'phone', type: 'string' },
      { key: 'physical_address_1', type: 'string' },
      { key: 'physical_address_2', type: 'string' },
      { key: 'physical_city', type: 'string' },
      { key: 'physical_country_id', type: 'string' },
      { key: 'physical_postcode', type: 'string' },
      { key: 'physical_state', type: 'string' },
      { key: 'physical_suburb', type: 'string' },
      { key: 'postal_address_1', type: 'string' },
      { key: 'postal_address_2', type: 'string' },
      { key: 'postal_city', type: 'string' },
      { key: 'postal_country_id', type: 'string' },
      { key: 'postal_postcode', type: 'string' },
      { key: 'postal_state', type: 'string' },
      { key: 'postal_suburb', type: 'string' },
      { key: 'twitter', type: 'string' },
      { key: 'updated_at', type: 'string' },
      { key: 'version', type: 'string' },
      { key: 'website', type: 'string' },
      { key: 'year_to_date', type: 'string' }
    ],
    perform: makeRequest,
    sample: {
      data: {
        website: null,
        last_name: 'Stark',
        loyalty_balance: 0,
        version: 3505346597,
        postal_city: null,
        customer_code: 'Tony-37YP',
        twitter: null,
        fax: null,
        physical_state: null,
        enable_loyalty: true,
        physical_address_1: null,
        deleted_at: null,
        id: '0af7b240-ab83-11e7-eddc-4023c64c85e5',
        first_name: 'Tony',
        physical_address_2: null,
        physical_postcode: null,
        postal_postcode: null,
        physical_country_id: null,
        note: null,
        postal_suburb: null,
        date_of_birth: null,
        do_not_email: false,
        company_name: null,
        email: 'tony@starkinc.com',
        custom_field_3: null,
        custom_field_2: null,
        custom_field_1: null,
        postal_state: null,
        physical_suburb: null,
        custom_field_4: null,
        physical_city: null,
        updated_at: '2017-05-24T01:53:25+00:00',
        phone: null,
        contact_source: null,
        postal_country_id: null,
        customer_group_id: 'b1ca8902-f019-11e3-a0f5-b8ca3a64f8f4',
        name: 'Tony Stark',
        year_to_date: 0,
        gender: null,
        created_at: '2017-05-24T01:53:25+00:00',
        mobile: null,
        postal_address_1: null,
        postal_address_2: null,
        balance: 0
      }
    }
  }
};
