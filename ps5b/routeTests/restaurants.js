const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHTTP = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHTTP);

describe('Yelp API', () => {
    it('should return 20 </li elements', function (done) {
        chai.request(app)
            .post('/ps5b/restaurants')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({city: 'dallas'})
            .end((err, response) => {
                console.log(response.text.match(/<li>/g));
                console.log(response.text);
                let num=response.text.match(/<li>/g).length //globally matches li and the
                expect(num).to.be.equal(20);
                done();
            })
    });
    it('should return DALLAS (capitalized) in title', function (done) {
        chai.request(app)
            .post('/ps5b/restaurants')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({city: 'dallas'})
            .end((err, response) => {
                let titleboolean=/title.*DALLAS.*title/.test(response.text);
                expect(titleboolean).to.be.equal(true);
                done();
            })
    });
    it('should return 200 success code', function (done) {
        chai.request(app)
            .post('/ps5b/restaurants')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({city: 'dallas'})
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });

})
