// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!
const { replaceVars } = require('../utils');

const getList = (z, bundle) => {
  let url = `https://{{domain_prefix}}.vendhq.com/api/2.0/consignments`;
  url = replaceVars(url, bundle);

  const responsePromise = z.request({ url });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content);
  });
};
const receiveHook = (z, bundle) => {

};

module.exports = {
  key: 'consignment_received',
  noun: 'Consignment',

  display: {
    label: 'Consignment Received',
    description:
      'Triggers when a product assigned to a consignment has been received into stock e.g. a supplier order, stock transfer or stocktake event.',
    hidden: false,
    important: true
  },

  operation: {
    inputFields: [],
    outputFields: [
      {
        key: 'consignment_date',
        type: 'string'
      },
      {
        key: 'created_at',
        type: 'string'
      },
      {
        key: 'deleted_at',
        type: 'string'
      },
      {
        key: 'due_at',
        type: 'string'
      },
      {
        key: 'filters',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string'
      },
      {
        key: 'name',
        type: 'string'
      },
      {
        key: 'outlet_id',
        type: 'string'
      },
      {
        key: 'received_at',
        type: 'string'
      },
      {
        key: 'reference',
        type: 'string'
      },
      {
        key: 'show_inactive',
        type: 'string'
      },
      {
        key: 'source_outlet_id',
        type: 'string'
      },
      {
        key: 'status',
        type: 'string'
      },
      {
        key: 'supplier_id',
        type: 'string'
      },
      {
        key: 'supplier_invoice',
        type: 'string'
      },
      {
        key: 'total_cost_gain',
        type: 'string'
      },
      {
        key: 'total_cost_loss',
        type: 'string'
      },
      {
        key: 'total_count_gain',
        type: 'string'
      },
      {
        key: 'total_count_loss',
        type: 'string'
      },
      {
        key: 'type',
        type: 'string'
      },
      {
        key: 'updated_at',
        type: 'string'
      },
      {
        key: 'version',
        type: 'string'
      }
    ],
    perform: receiveHook,
    performList: getList,
    sample: {
      total_cost_loss: null,
      consignment_date: '2014-07-13T23:22:00+00:00',
      reference: null,
      total_count_gain: null,
      updated_at: '2015-07-30T02:59:51+00:00',
      filters: [],
      received_at: '2015-07-30T02:59:51+00:00',
      deleted_at: null,
      id: '7dbe52cd-0ae4-11e4-a0f5-b8ca3a64f8f4',
      supplier_id: null,
      source_outlet_id: null,
      version: 827406,
      type: 'SUPPLIER',
      status: 'RECEIVED',
      supplier_invoice: '',
      total_cost_gain: null,
      name: 'Order - Mon 14 Jul 2014',
      due_at: null,
      outlet_id: 'b1e04bd8-f019-11e3-a0f5-b8ca3a64f8f4',
      created_at: '2014-07-13T23:22:00+00:00',
      show_inactive: true,
      total_count_loss: null
    }
  }
};
