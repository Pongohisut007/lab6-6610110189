const request = require('supertest');
const app = require('../app'); // ถ้าใช้ Express ให้เชื่อมต่อกับไฟล์ app.js

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
