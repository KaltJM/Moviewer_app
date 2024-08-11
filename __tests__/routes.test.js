const request = require('supertest');
const app = require('..\\app.js');

describe('GET /movies', () => {
	it('get movies from DB', async () => {
		const response = await request(app).get('/movies');
		expect(response.status).toBe(200);
	});
  it('get specific genre of movies from DB (existing genre)', async () => {
		const response = await request(app).get('/movies?genre=Thriller');
		expect(response.status).toBe(200);
	});
  it('get specific genre of movies from DB (non-existing genre)', async () => {
		const response = await request(app).get('/movies?genre=comedia');
		expect(response.status).toBe(400);
	});
});
