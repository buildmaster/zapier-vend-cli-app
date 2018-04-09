

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
const expect = require('chai').expect;
const nock = require('nock');
let sampleResponse = {
  "data": {
    "id": "0af7b240-ab83-11e7-eddc-4023c64c85e5",
    "customer_code": "Tony-37YP",
    "name": "Tony Stark",
    "first_name": "Tony",
    "last_name": "Stark",
    "email": "tony@starkinc.com",
    "year_to_date": 0,
    "balance": 0,
    "loyalty_balance": 0,
    "note": null,
    "gender": null,
    "date_of_birth": null,
    "company_name": null,
    "do_not_email": false,
    "contact_source": null,
    "phone": null,
    "mobile": null,
    "fax": null,
    "twitter": null,
    "website": null,
    "physical_address_1": null,
    "physical_address_2": null,
    "physical_suburb": null,
    "physical_city": null,
    "physical_postcode": null,
    "physical_state": null,
    "physical_country_id": null,
    "postal_address_1": null,
    "postal_address_2": null,
    "postal_suburb": null,
    "postal_city": null,
    "postal_postcode": null,
    "postal_state": null,
    "postal_country_id": null,
    "customer_group_id": "b1ca8902-f019-11e3-a0f5-b8ca3a64f8f4",
    "enable_loyalty": true,
    "custom_field_1": null,
    "custom_field_2": null,
    "custom_field_3": null,
    "custom_field_4": null,
    "created_at": "2017-05-24T01:53:25+00:00",
    "updated_at": "2017-05-24T01:53:25+00:00",
    "deleted_at": null,
    "version": 3505346597
  }
};
describe.only('Creates - Create Customer', () => {
  zapier.tools.env.inject();
  let _result;
  before(() => {
    const bundle = {
      authData: {
        access_token: "ACCESS_TOKEN",
        refresh_token: "REFRESH_TOKEN",
        domain_prefix: 'someapp'
      },

      inputData: {
        // TODO: Pulled from input fields' default values. Edit if necessary.
        first_name: "test",
        last_name: "test"
      }
    };
    // mocks the next request that matches this url and querystring
    nock('https://someapp.vendhq.com')
      .post('/api/2.0/customers', bundle.inputData)
      .reply(201, sampleResponse);
    return appTester(App.creates['create_customer'].operation.perform, bundle)
      .then(result => _result = result);
  })
  it('should return the created customer', () => expect(_result.id).to.eql("0af7b240-ab83-11e7-eddc-4023c64c85e5"));
});
