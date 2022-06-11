const assert = require('assert');
const calculateResult = require('../service/calculationService');


describe('calculateResult performs correct operation and gives correct result', () => {
    it('Operation: Hypotenuse berechnen, parameters = [3,4] returns 5', () => {
        let operation = {
            "Name": "Hypotenuse berechnen",
            "Beschreibung": "Anhand von Ankathete und Gegenkathete die Länge der Hypotenuse berechnen.",
            "ParameterNamen":["Ankathete","Gegenkathete"],
            "Regel": "sqrt (Ankathete^2 + Gegenkathete^2)"
        };
        assert.equal(calculateResult(operation, [3, 4]), 5);
    });
    it('Operation: Ganzzahligen Rest ausgeben, parameters = [12,5] returns 2', () => {
        let operaiton = {
            "Name": "Ganzzahligen Rest ausgeben",
            "Beschreibung": "Ausgehend von einer Zahl wird der ganzzahlige Rest einer Division berechnet.",
            "ParameterNamen":["Zahl","Divisor"],
            "Regel": "Zahl%Divisor"
        };
        assert.equal(calculateResult(operaiton, [12, 5]),2);
    });
    it('Operation: Kreisumfang berechnen, parameters = [1] returns 3.1415', () => {
        let operation = {    "Name": "Kreisumfang berechnen",
        "Beschreibung": "Mit dem Durchmesser eines Kreises kann hier der Umfang berechnet werden.",
        "ParameterNamen":["Durchmesser"],
        "Regel": "Durchmesser*3.1415"};
        assert.equal(calculateResult(operation, [1]),3.1415);
    });
});