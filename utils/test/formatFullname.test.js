const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an "Firstname Lastname" if "content" arg is written other size of letters', () => {
    expect(formatFullname('AmAnDa DoE')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('amandA doE')).to.equal('Amanda Doe');
    expect(formatFullname('AMANDa DOe')).to.equal('Amanda Doe');
    expect(formatFullname('JoHN dOE')).to.equal('John Doe');
  });
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if the "full name" arg is not of the form "firstName lastName"', () => {
    expect(formatFullname('Amanda')).to.equal('Error');
    expect(formatFullname('Amanda Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Test Test')).to.equal('Error');
    expect(formatFullname('John Doe Lorem Ipsum Lorem Ipsum')).to.equal('Error');
  });
});
