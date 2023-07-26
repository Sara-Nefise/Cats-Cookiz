const swaggerJsdoc = require('swagger-jsdoc');
const cookerDoc = require('./auth/cookerDoc');
const CustomerDocs = require('./auth/customerDocs');
const cookerApiDoc = require('./cooker/cookerDocs');
const customerApiDocs = require('./costumer/costumerDocs');
// const adminDocs = require('./admin/adminDocs');
const orderDocs = require('./order/orderDocs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cookiz API Docs',
      version: '1.0.0',
    },
    tags: [
      {
        name: 'Customer',
        description: 'API to manage your Customer Acc',
      },
      {
        name: 'Cooker',
        description: 'API to manage your Cooker Acc',
      },
    ],
    paths: {
      ...cookerDoc.paths,
      ...CustomerDocs.paths,
      ...cookerApiDoc.paths,
      ...customerApiDocs.paths,
      // ...adminDocs.paths,
      ...orderDocs.paths,
    },
  },
  apis: [
    './src/controllers/authForCooker.js',
    './src/controllers/authForCustomer.js',
    './src/controllers/cookers.js',
    './src/controllers/customers.js',
    './src/controllers/admin.js',
    './src/controllers/orders.js'
    

  ],
};

const swaggerDocs = swaggerJsdoc(options);

module.exports = swaggerDocs;
