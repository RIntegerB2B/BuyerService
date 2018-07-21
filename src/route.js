var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute'); 
var productRoutes = require ('./product/productRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
};

