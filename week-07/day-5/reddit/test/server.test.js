'use strict';

const app = require('../server');
const { expect } = require('chai');
const request = require('supertest');

describe('routes', () => {
  it('GET /posts', () => {
    request(app)
      .get('/posts')
      .expect(200)
      .end((err, res) => {
        expect(res.body[0].title).to.equal(`I PUT stuff on my cats head!!!`);
        
      });
  });
});
