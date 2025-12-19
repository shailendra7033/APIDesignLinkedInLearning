import request from 'supertest';
import app from '../app';

describe('User APIs - Functional Testing', () => {
  it('should create a new user successfully', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({
        name: 'Shailendra',
        interestedLanguage: 'TypeScript',
      });

    expect(res.status).toBe(201);
  });

  it('should fetch all users', async () => {

      // Arrange
    await request(app).post('/api/v1/users').send({
        name: 'Shailendra',
        interestedLanguage: 'TypeScript',
    });

    const res = await request(app).get('/api/v1/users');



    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
