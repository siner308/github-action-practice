const supertest = require('supertest');
const app = require('../app').default;

describe('API', () => {

  describe('/', () => {

    it('success', async () => {
      const res = await supertest(app).get('/');
      expect(res.status).toBe(200);
      expect(res.text).toBe('{}');
      console.log('success');
    });

  });

});
