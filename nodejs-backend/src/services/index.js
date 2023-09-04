const users = require("./users/users.service.js");
const product = require("./product/product.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(product);
  // ~cb-add-configure-service-name~
};
