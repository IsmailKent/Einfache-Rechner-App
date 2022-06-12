const app = require("../app");
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');
chai.use(chaiHttp);
let should = chai.should();

const operations = require('../resources/operations');


describe('Post /calculate', (done) => {
    it('Post request to /calculate given operation name and parameters returns correct results ', done => {
        chai
            .request(app)
            .post('/calculate')
            .set('content-type', 'application/json')
            .send(JSON.stringify({
                operationName: "Hypotenuse berechnen",
                parameters: [3, 4]
            }))
            .end((err, res) => {
                res.should.have.status(200);
                res.body.result.should.eql(5);
                done();
            });
    });
    it('Post request to /calculate given invalid parameters returns 400 with right error message ', done => {
        chai
            .request(app)
            .post('/calculate')
            .set('content-type', 'application/json')
            .send(JSON.stringify({
                operationName: "Hypotenuse berechnen",
                parameters: [3, "a"]
            }))
            .end((err, res) => {
                res.should.have.status(400);
                res.body.error.should.eql("Bitte gültige numerische Werte bei allen Feldern eingeben.");
                done();
            });
    });
});

describe('Get /operations', (done) => {
    it('Get request to /operations returns content of operations json object ', done => {
        chai
            .request(app)
            .get('/operations')
            .end((err, res) => {
                console.log("body: \n" +JSON.stringify(res.body));
                res.should.have.status(200);
                res.body.should.eql(operations);
                done();
            });
    });
});

describe('Get /', (done) => {
    it('Get request to / returns 200 status ', done => {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});