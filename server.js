const express = require('express')
const bodyParser = require("body-parser"); // import for parsing raw body of transaction(for easy use)
const PORT = process.env.PORT || 80

const app = express()

// body-parse middleware to clean requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json({status: 'we good'}))

// MODULE ONE & TWO
var basic_routing = require("./api/routes/basicRouting");
basic_routing(app);

// app.get('/home', (request, response) => {
//   return response.json('well, did it work?')
// })

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
