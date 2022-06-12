
const math = require('mathjs');
const operations = require('../resources/operations');


function calculateResult(operation, paramaters){
    let rule = operation.Regel;
    let parameterNames = operation.ParameterNamen
    console.log("calculating rule "+rule+" with parameters "+paramaters)
    let expression = rule;
    for (let i in paramaters){
        console.log("replacing paramter:"+parameterNames[i]+" with value "+ paramaters[i]);
        expression= expression.replace(parameterNames[i], paramaters[i]);
    }
    console.log("evaluation expression "+expression);
    let result = null;
    try{
        result = math.evaluate(expression);
    }
    catch(e){
        console.log(e);
    }
    return result;

    
}


module.exports = calculateResult;