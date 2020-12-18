import { expect } from 'chai';
import request from 'supertest';

import app from '../index';

describe('APIs Test', () => {
  before((done) => {

    done();
  });

  describe('GET /auth/login', () => {
    it('should return empty object', (done) => {
      request(app.getApp())
        .post('/api/v1/auth/login')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          expect(res.body.data).to.be.an('object');

          const { data } = res.body;
          expect(Object.keys(data).length).to.be.equal(0);
          done();
        });
    });
  });
});
