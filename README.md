# Simple Modifiable Calculator

This app is designed to offer the user the ability to compute certain operations offered by the app. The interfece is provided in German. The available operations are configrables in `json` format. 

## How to Run 

1. run `npm install` to install node modules
2. to test the application and make sure everything is fine, run `npm test`
3. to start the application locally, run the server using `npm start` 
4. open `localhost:5000` in browser

## How to add operations
Inside the `resources/operations.js` file is the `operations object`. An operation is a `json` object defined by the following parameters:
- `Name`: Name of operation
- `Beschreibung`: Short description of the operation and what is computes.
- `ParameterNamen`: Names of all parameters used in the operation.
- `Regel`: Rule used to compute the operation. Parameters names are used as variables, e.g. for parameters `["Ankathete","Gegenkathete"]` describe the operation as `"sqrt (Ankathete^2 + Gegenkathete^2)"`. Allowed basic operations are all operations known by the `mathjs`  library. For more examples check the [mathjs github repository](https://github.com/josdejong/mathjs/blob/8c5c5b03b65df67d2bccbb84eb6acfb9c5c47a58/examples/expressions.js)



### acknowlegement of guiding resources as a refresher on Nodejs:
- [node-express-realworld-example-app](https://github.com/gothinkster/node-express-realworld-example-app)

