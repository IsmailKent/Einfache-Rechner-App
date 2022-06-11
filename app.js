//setting up backend
const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;
app.use(require('morgan')('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

//setting up front end
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'mainpage' }));
app.set('view engine', 'handlebars');

// to get data on button click
const path = require('path');

// add routes to app
app.use('/', require('./routes/index'));
app.use('/operations', require('./routes/operations'));
app.use('/calculate', require('./routes/calculate'));


// catches requests to non-existing pages 
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
// error handlers
app.use(function(err, req, res, next) {
    console.log(err.stack);
  
    res.status(err.status || 500);
  
    res.json({'errors': {
        message: err.message,
        error: err
      }});
    });

// start server 
app.listen(Port, () => console.log(`server started on Port ${Port}`));

module.exports = app;