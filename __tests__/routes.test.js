const request = require('supertest');
const router = require('../src/router');

describe('GET /', () => {
  it('get movies from DB', () => {
    const response = request(router).get('/movies');
    console.log(response);
    expect(response.status).toBe(200);
  });
})