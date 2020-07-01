const app = require('../app');
const chai = require('chai');
const mocha = require('mocha');
const chaiHTTP = require('chai-http'); // has a dependency on mocha
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHTTP);

describe('Yelp API', () => {
    it('should return 20 </li elements', function (done) {
        //need a handler for this request
        //similar to starting up www file that creates http server
        //need to tell it what is the handlers for incoming requests (its going to be application itself)
        chai.request(app)
            //this will start stream so we start to get response from the stream
            .post('/ps4')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({city: 'dallas'})
            .end((err, response) => {
                console.log(response.text.match(/<li>/g));
                console.log(response.text);
                let num=response.text.match(/<li>/g).length //globally matches li and the
                expect(num).to.be.equal(20);
                done(); //use this when have http req in chai or mocha test suite to let chai test know we're complete and that closes the stream (like calling .json on obj)
            })
    });
    it('should return DALLAS (capitalized) in title', function (done) {
        chai.request(app)
            .post('/ps4')
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
            .post('/ps4')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({city: 'dallas'})
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });

})
