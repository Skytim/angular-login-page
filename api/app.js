var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var login = require('./routes/login');
var PORT = process.env.PORT || 5000
var app = express();
app.use(cors());
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 


app.use('/api/login', login);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
module.exports = app;
