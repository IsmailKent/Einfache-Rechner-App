const app = require("../app");
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');
chai.use(chaiHttp);

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
                assert(res.status, 200);
                assert(res.body.result,5);
                done();
            });
    });
});

describe('Get /operations', (done) => {
    it('Get request to /operations returns content of operations json object ', done => {
        chai
            .request(app)
            .get('/opertations')
            .end((err, res) => {
                assert(res.status, 200);
                assert(res.body, operations);
                done();
            });
    });
});