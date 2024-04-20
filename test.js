const request = require('supertest');  // Simulates HTTP requests
const app = require('./your-app-file'); // Replace with actual file path

describe('GET /', () => {
  test('responds with "Hello World!"', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/plain/)
      .expect(res => {
        expect(res.text).toBe('Hello World!');
      })
      .end(done);
  });
});
