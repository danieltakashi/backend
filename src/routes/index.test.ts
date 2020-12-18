import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../index';

describe('APIs Test', () => {
  before((done) => {

    done();
  });

  describe('GET /', () => {
    it('should return welcome message', (done) => {
      request(app.getApp())
        .get('/api/v1')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          expect(res.body).to.be.an('string');
          expect(res.body).to.be.equal('Welcome');
          done();
        });
    });
  });

  describe('NOT FOUND', () => {
    it('should return welcome message', (done) => {
      request(app.getApp())
        .get('/null')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(404);
          expect(res.body).to.be.an('object');

          const { code, message } = res.body;
          expect(code).to.be.equal(404);
          expect(message).to.be.equal('Ooops, route not found');
          done();
        });
    });
  });
});
