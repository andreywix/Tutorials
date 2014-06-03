var mocha = require('mocha');
var sinon = require('sinon');
var app = require('../index');
var expect = require('chai').expect;
var toUpperCaseModule = require('../touppercase-module.js');
var request = require('supertest');

var app = require('../index');

describe('toUpperCaseModule', function() {
    it('should make everything uppercase', function () {
        expect(toUpperCaseModule('hello')).to.equal('HELLO');
    });
});

describe('POST /post', function() {
    it('should return text that was sent', function(done){
        request(app)
          .post('/post')
          .send('myinput=wazzzzzup')
          .expect('WAZZZZZUP')
          .expect(200, done);
    });
});

