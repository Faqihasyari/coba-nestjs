import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { UserModule } from './user.module';

describe('UserController (Integration Test)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /users', async () => {
    const res = await request(app.getHttpServer()).get('/users');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
  });

  it('GET /users/1', async () => {
    const res = await request(app.getHttpServer()).get('/users/1');
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Faqih');
  });

  it('GET /users/99 should return 404', async () => {
    await request(app.getHttpServer())
      .get('/users/99')
      .expect(404);
  });
});
