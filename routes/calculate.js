const router = require('express').Router();
const calculateResult = require('../service/calculationService');
const operations = require('../resources/operations');


// end point for available operations

router.post('/', (req, res) => {
    // Add validation 
    // get operation from its name
    // perform calculation
    // return result
    let operationName = req.body.operationName;
    console.log("received calculation request for operation=" + operationName)
    let paramaters = req.body.parameters;
    console.log("with parameters=" + paramaters)
    operations.forEach(operation => console.log(operation.Name))
    let operation = operations.filter(o => o.Name == operationName)
    if (operation.length == 0) {
        console.log("No such operation found: " + operationName);
        res.status(400).json({
            error: "Rechenregel " + operationName + " existiert nicht."
        });
    }
    operation = operation[0];
    if (operation.ParameterNamen.length != paramaters.length) {
        console.log("No such operation found: " + operationName);
        res.status(400).json({
            error: "Falsche Anzahl an Parameter.Rechenregel " + operationName + " erwartet " + operation.ParameterNamen.length + " Parameter."
        });
    }

    let result = calculateResult(operation, paramaters);
    if (result) {
        res.json({
            result: result
        });
    }
    else {
        res.status(400).json({
            error: "Bitte gültige numerische Werte bei allen Feldern eingeben."
        })
    }
}
);



module.exports = router;