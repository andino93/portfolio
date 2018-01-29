import {} from 'dotenv/config';
import { expect, assert } from 'chai';
import axios from 'axios';
import 'babel-polyfill'; // for async/await compiling
import server from '../index';

describe('Express Server', () => {
  describe('should respond to requests', async () => {
    let response;
    before((done) => {
      axios.get(`http://127.0.0.1:${process.env.PORT}/`)
        .then(res => { response = res; })
        .then(done)
        .catch(err => done(err));
    })
    it('should receive 200 response', () => {
      expect(response.status).to.equal(200);
    })
  })
})
