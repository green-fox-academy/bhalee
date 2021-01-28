'use strict';

const app = require('../routes');
const { expect } = require('chai');
const request = require('supertest');

describe('routes', () => {
  it('GET /groot?message=message should return the right response with 200 status code', () => {
    request(app)
      .get('/groot')
      .query({ message: 'message' })
      .expect(200)
      .end((err, res) => {
        expect(res.body.received).to.equal('message')
        expect(res.body.translated).to.equal('I am Groot!')
        if (err) throw err;
      });
    });

  it('GET /groot if query missing with 400 status code', () => {
    request(app)
      .get('/groot')
      .expect(400)
      .end((err, res) => {
        expect(res.body.html).to.equal('I am Groot!')
        if (err) throw err;
      });
  });
});
