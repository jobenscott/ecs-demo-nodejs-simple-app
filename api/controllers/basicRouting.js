// import cookie package to easily read cookies
var cookie = require("cookie");

// MODULE ONE
// Step 1: Get hello world through route -> localhost:5000/helloWorld
exports.hello_world = function(req, res) {
  res.json("Hello World!");
};

// Step 2: Say hello to yourself through path variables -> localhost:5000/hello/:name
exports.hello_name = function(req, res) {
  res.json("Hello " + req.params["name"]);
};

// Step 3: Pass data through the url -> localhost:5000/?some_key=some_value
exports.url_params = function(req, res) {
  var response = [];
  var obj = req.query;

  Object.keys(obj).forEach(function(key) {
    response.push(obj[key]);
  });
  res.json(response);
};

// Step 4: Pass data through url-encoded form
exports.form_data = function(req, res) {
  var response = [];
  var obj = req.body;
  Object.keys(obj).forEach(function(key) {
    response.push(obj[key]);
  });
  res.json(response);
};
// END MODULE ONE

// MODULE TWO
// Step 1: Passing form data through url, and having logic on our backend to return an evaluated response
exports.url_math = function(req, res) {
  // parse the 2 numerical values passed and set them
  var number_1 = parseInt(req.body.number_1);
  var number_2 = parseInt(req.body.number_2);
  // set the operator
  var op = req.body.operator;
  // variable to check if operator value was passed. default true
  var op_check = true;
  // initiate result var
  var result;

  // check operator value passed in request and use to evaluate equation, finally setting to result var
  switch (op) {
    case "+":
      result = eval(number_1 + op + number_2);
      break;
    case "-":
      result = eval(number_1 + op + number_2);
      break;
    case "*":
      result = eval(number_1 + op + number_2);
      break;
    case "/":
      result = eval(number_1 + op + number_2);
      break;
    case "%":
      result = eval(number_1 + op + number_2);
      break;
    default:
      // set operate check to false if nothing was passed
      op_check = false;
  }

  // return evaluated answer, otherwise return error
  if (number_1 && number_2 && op_check) {
    res.json(result);
  } else {
    res.json(
      "either your numbers aren't ints, or you didn't use an accepted operator(+,-,*,/)"
    );
  }
};

// END MODULE TWO
