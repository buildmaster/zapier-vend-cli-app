require('should');
const nock = require('nock');
const expect = require('chai').expect;
const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Triggers - Consignment Received', () => {
  //** SAMPLE DATA START */
  let sampleConsignmentList = [{
    "id": "7dbe52cd-0ae4-11e4-a0f5-b8ca3a64f8f4",
    "outlet_id": "b1e04bd8-f019-11e3-a0f5-b8ca3a64f8f4",
    "name": "Order - Mon 14 Jul 2014",
    "due_at": null,
    "type": "SUPPLIER",
    "status": "RECEIVED",
    "supplier_id": null,
    "source_outlet_id": null,
    "consignment_date": "2014-07-13T23:22:00+00:00",
    "received_at": "2015-07-30T02:59:51+00:00",
    "show_inactive": true,
    "supplier_invoice": "",
    "reference": null,
    "total_count_gain": null,
    "total_cost_gain": null,
    "total_count_loss": null,
    "total_cost_loss": null,
    "created_at": "2014-07-13T23:22:00+00:00",
    "updated_at": "2015-07-30T02:59:51+00:00",
    "deleted_at": null,
    "version": 827406,
    "filters": []
  },
  {
    "id": "b8ca3a65-0183-11e4-fbb5-2812b9e74b37",
    "outlet_id": "b1e04bd8-f019-11e3-a0f5-b8ca3a64f8f4",
    "name": "Stocktake 1",
    "due_at": null,
    "type": "STOCKTAKE",
    "status": "STOCKTAKE_COMPLETE",
    "supplier_id": null,
    "source_outlet_id": null,
    "consignment_date": "2014-08-20T02:36:02+00:00",
    "received_at": "2014-08-20T02:37:32+00:00",
    "show_inactive": true,
    "supplier_invoice": "",
    "reference": null,
    "total_count_gain": null,
    "total_cost_gain": null,
    "total_count_loss": null,
    "total_cost_loss": null,
    "created_at": "2014-08-20T02:36:02+00:00",
    "updated_at": "2014-08-20T02:37:32+00:00",
    "deleted_at": null,
    "version": 1228871,
    "filters": []
  },
  {
    "id": "b8ca3a65-0183-11e4-fbb5-281711e05741",
    "outlet_id": "b8ca3a65-0183-11e4-fbb5-2816d2677218",
    "name": "Stock Transfer",
    "due_at": "2014-08-21T00:00:00+00:00",
    "type": "OUTLET",
    "status": "RECEIVED",
    "supplier_id": null,
    "source_outlet_id": "b1e04bd8-f019-11e3-a0f5-b8ca3a64f8f4",
    "consignment_date": "2014-08-20T03:07:07+00:00",
    "received_at": "2014-08-20T03:08:49+00:00",
    "show_inactive": true,
    "supplier_invoice": "",
    "reference": null,
    "total_count_gain": null,
    "total_cost_gain": null,
    "total_count_loss": null,
    "total_cost_loss": null,
    "created_at": "2014-08-20T03:07:07+00:00",
    "updated_at": "2014-08-20T03:08:49+00:00",
    "deleted_at": null,
    "version": 1228872,
    "filters": []
  }];
  let sampleProductList = [{
    "product_id": "fa16cdf8-063c-11e4-a0f5-b8ca3a64f8f4",
    "product_sku": null,
    "count": "10.00000",
    "received": "10.00000",
    "cost": "0.00000",
    "is_included": false,
    "status": "RECEIVE_SUCCESS",
    "created_at": "2015-02-23T18:46:12+00:00",
    "updated_at": "2015-07-30T02:59:51+00:00",
    "deleted_at": null,
    "version": 3542970
  },
  {
    "product_id": "fa16cdf8-063c-11e4-a0f5-b8ca3a64f8f4",
    "product_sku": null,
    "count": null,
    "received": "0.00000",
    "cost": "0.00000",
    "is_included": false,
    "status": "RECEIVE_SUCCESS",
    "created_at": "2015-02-23T18:46:24+00:00",
    "updated_at": "2015-07-30T02:59:51+00:00",
    "deleted_at": null,
    "version": 3542975
  },
  {
    "product_id": "fa16cdf8-063c-11e4-a0f5-b8ca3a64f8f4",
    "product_sku": null,
    "count": "10.00000",
    "received": "0.00000",
    "cost": "100.00000",
    "is_included": true,
    "status": "RECEIVE_SUCCESS",
    "created_at": "2014-07-13T23:22:59+00:00",
    "updated_at": "2015-07-30T02:59:51+00:00",
    "deleted_at": null,
    "version": 20813790
  }];
  let sampleHookPayload = {
    "id": "0afa8de1-1441-11e7-edec-da42913731c8",
    "consignment_id": "0afa8de1-1441-11e7-edec-da427ee4bec7",
    "product_id": "0624dbcd-ef13-11e6-e986-fcc1c366e772",
    "count": "8.00000",
    "received": "8.00000",
    "cost": 4,
    "sequence_number": 5
  }
  //** SAMPLE DATA END */
  describe("webhook", () => {
    let _results;
    zapier.tools.env.inject();
    before(() => {
      const bundle = {
        authData: {
          access_token: "ACCESS_TOKEN",
          refresh_token: "REFRESH_TOKEN",
          domain_prefix: "testdomainprefix"
        },

        cleanedRequest: sampleHookPayload
      };

      return appTester(App.triggers['consignment_received'].operation.perform, bundle)
        .then(results => _results = results);
    });
    it('should return correct object', () => expect(_results).to.eql([{
      "id": "0afa8de1-1441-11e7-edec-da427ee4bec7_0624dbcd-ef13-11e6-e986-fcc1c366e772_5",
      "consignment_id": "0afa8de1-1441-11e7-edec-da427ee4bec7",
      "product_id": "0624dbcd-ef13-11e6-e986-fcc1c366e772",
      "count": "8.00000",
      "received": "8.00000",
      "cost": 4,
      "sequence_number": 5
    }]))
  });
  describe("fallback poll", () => {
    let _results;
    before(() => {
      const bundle = {
        authData: {
          access_token: "ACCESS_TOKEN",
          refresh_token: "REFRESH_TOKEN",
          domain_prefix: "testdomainprefix"
        },
        inputData: {}
      };
      nock('https://testdomainprefix.vendhq.com')
        .get('/api/2.0/consignments')
        .reply(200, {
          data: sampleConsignmentList,
          "version": {
            "max": 20813790,
            "min": 3542970
          }
        });
      nock('https://testdomainprefix.vendhq.com')
        .get('/api/2.0/consignments/7dbe52cd-0ae4-11e4-a0f5-b8ca3a64f8f4/products')
        .reply(200, {
          data: sampleProductList,
          "version": {
            "max": 20813790,
            "min": 3542970
          }
        });
      nock('https://testdomainprefix.vendhq.com')
        .get('/api/2.0/consignments/b8ca3a65-0183-11e4-fbb5-2812b9e74b37/products')
        .reply(200, {
          data: sampleProductList,
          "version": {
            "max": 20813790,
            "min": 3542970
          }
        });
      nock('https://testdomainprefix.vendhq.com')
        .get('/api/2.0/consignments/b8ca3a65-0183-11e4-fbb5-281711e05741/products')
        .reply(200, {
          data: sampleProductList,
          "version": {
            "max": 20813790,
            "min": 3542970
          }
        })
      return appTester(App.triggers['consignment_received'].operation.performList, bundle)
        .then(results => _results = results);
    });
    it('should get an array', () => expect(_results).to.be.an('array'));
    it('should return correct number of items', () => expect(_results.length).to.eql(9));
    it('should combine ids', () => expect(_results.map(r => r.id)).to.eql([
      `${sampleConsignmentList[0].id}_${sampleProductList[0].product_id}_0`,
      `${sampleConsignmentList[0].id}_${sampleProductList[1].product_id}_1`,
      `${sampleConsignmentList[0].id}_${sampleProductList[2].product_id}_2`,
      `${sampleConsignmentList[1].id}_${sampleProductList[0].product_id}_0`,
      `${sampleConsignmentList[1].id}_${sampleProductList[1].product_id}_1`,
      `${sampleConsignmentList[1].id}_${sampleProductList[2].product_id}_2`,
      `${sampleConsignmentList[2].id}_${sampleProductList[0].product_id}_0`,
      `${sampleConsignmentList[2].id}_${sampleProductList[1].product_id}_1`,
      `${sampleConsignmentList[2].id}_${sampleProductList[2].product_id}_2`,

    ]));
  })
});
