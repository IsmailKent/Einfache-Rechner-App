const router = require('express').Router();
const calculateResult = require('../service/calculationService');
const operations = require('../resources/operations');


// end point for available operations

router.post('/', (req, res) => {
            // Add validation 
            // get operation from its name
            // perform calculation
            // return result
            console.log(req.body)
            let operationName = req.body.operationName;
            console.log("received calculation request for operation="+operationName)
            let paramaters = req.body.parameters;
            console.log("with parameters="+paramaters)
            console.log("available operations ")
            operations.forEach(operation=> console.log(operation.Name))
            let operation = operations.filter(o => o.Name == operationName)
            console.log("found operation "+operation.length)
            if (operation.length==0){
                // no such operaiton exists
            }
            operation = operation[0];
            if (operation.ParameterNamen.length!=paramaters.length){
                // not the correct number of parameters
            }

            let result = calculateResult(operation, paramaters);
            res.json({
                result: result
            });
        }
    );

    

module.exports = router;