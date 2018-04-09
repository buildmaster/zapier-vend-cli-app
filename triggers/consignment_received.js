
const performList = (z, bundle) => {
  let url = `https://${bundle.authData.domain_prefix}.vendhq.com/api/2.0/consignments`;

  const responsePromise = z.request({ url });
  return responsePromise.then(response => {
    response.throwForStatus();
    return z.JSON.parse(response.content).data;
  }).then((list) => {
    // have to do a call to get products for each and every consignment
    return Promise.all(list.map((consignment) => {
      return z.request({ url: `https://${bundle.authData.domain_prefix}.vendhq.com/api/2.0/consignments/${consignment.id}/products` })
        .then((response) => {
          response.throwForStatus();
          return z.JSON.parse(response.content).data;
        })
        .then((products) => products.map((product, index) => ({
          id: `${consignment.id}_${product.product_id}_${index}`,
          consignment_id: consignment.id,
          product_id: product.product_id,
          count: product.count,
          received: product.received,
          cost: product.cost,
          sequence_number: index
        })));
    }));
  }).then((results) => {
    //flatten results
    return [].concat(...results);
  });
};
const perform = (z, bundle) => {
  //override the id field
  return [
    Object.assign({},
      bundle.cleanedRequest,
      { id: `${bundle.cleanedRequest.consignment_id}_${bundle.cleanedRequest.product_id}_${bundle.cleanedRequest.sequence_number}` }
    )
  ];
};
const performSubscribe = () => {

  const data = {
    url: bundle.targetUrl,
    style: bundle.inputData.style
  };

  const options = {
    url: `https://${bundle.authData.domain_prefix}.vendhq.com/api/webhooks`,
    method: 'POST',
    body: {
      data: JSON.stringify({
        url: bundle.targetUrl,
        active: "true",
        type: 'consignment.receive',
      })
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  };

  return z.request(options)
    .then((response) => JSON.parse(response.content));
};
const performUnsubscribe = () => {
  const options = {
    url: `https://${bundle.authData.domain_prefix}.vendhq.com/api/webhooks/${bundle.subscribeData.id}`,
    method: 'DELETE'
  };
  return z.request(options);
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
      { key: 'id', type: 'string' },
      { key: 'consignment_id', type: 'string' },
      { key: 'product_id', type: 'string' },
      { key: 'count', type: 'string' },
      { key: 'received', type: 'string' },
      { key: 'cost', type: 'string' },
      { key: 'sequence_number', type: 'number' }
    ],
    perform,
    performList,
    performSubscribe,
    performUnsubscribe,
    sample: {
      "id": "0afa8de1-1441-11e7-edec-da427ee4bec7_0624dbcd-ef13-11e6-e986-fcc1c366e772_5",
      "consignment_id": "0afa8de1-1441-11e7-edec-da427ee4bec7",
      "product_id": "0624dbcd-ef13-11e6-e986-fcc1c366e772",
      "count": "8.00000",
      "received": "8.00000",
      "cost": "4",
      "sequence_number": 5
    }
  }
};
