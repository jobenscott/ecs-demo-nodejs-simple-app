module.exports = function(app) {
  var basic_routing = require("../controllers/basicRouting.js");

  // MODULE ONE
  // Hello World
  app.route("/helloWorld").get(basic_routing.hello_world);

  // Hello {name} - (any value passed as a path on the url)
  app.route("/hello/:name").get(basic_routing.hello_name);

  // Pass params through url
  app.route("/urlParams").get(basic_routing.url_params);

  // Pass data through url-encoded form
  app.route("/formData").get(basic_routing.form_data);
  // END MODULE ONE

  // MODULE TWO
  // pass 2 values and an operator(+,-,/,*,%) and get the evaluated(eval()) value returned
  app.route("/urlMath").get(basic_routing.url_math);
  // END MODULE TWO
};
