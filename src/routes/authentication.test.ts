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
          expect(res.body.data).to.be.an('string');

          const { data } = res.body;
          expect(data.length).to.be.equal(0);
          done();
        });
    });

    it('should return authorization token', (done) => {
      request(app.getApp())
        .post('/api/v1/auth/login')
        .send({ user: 'user', password: '123' })
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body.data).to.be.an('object');

          const { data } = res.body;
          expect(Object.keys(data).length).to.be.equal(1);
          done();
        });
    });

    it('should FAIL return authorization token', (done) => {
      request(app.getApp())
        .post('/api/v1/auth/login')
        .send({ user: 'user' })
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          expect(res.body.data).to.be.an('string');

          const { data } = res.body;
          expect(data.length).to.be.equal(0);
          done();
        });
    });

    it('should return Malformed authorization token', (done) => {
      request(app.getApp())
        .post('/api/v1/users')
        .set('Authorization', 'anytoken')
        .send({ name: 'user' })
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          expect(res.body.data).to.be.an('string');

          const { message } = res.body;
          expect(message).to.be.equal('jwt malformed');
          done();
        });
    });

    it('should return Malformed authorization token', (done) => {
      request(app.getApp())
        .post('/api/v1/users')
        .set('Authorization', '')
        .send({ name: 'user' })
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          expect(res.body.data).to.be.an('undefined');

          const { message } = res.body;
          expect(message).to.be.equal('Authorization token is required');
          done();
        });
    });
  });
});
