const NumberValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe('isNumberEven positive scenarios', function() {
  let validator;
  beforeEach(function() {
    validator = new NumberValidator();
  });
  afterEach(function() {
    validator = null;
  });
  it(`should return true if number is even`, function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it(`should return false if number is odd`, function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
  it(`chai test object`, function() {
    expect({a: 'apple', b: 43}).to.be.eql({a: 'apple', b: 43});
  });
  it(`chai test array`, function() {
    expect([1, 'apple']).to.have.lengthOf(2);
  });
});
