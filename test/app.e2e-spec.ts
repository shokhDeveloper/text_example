import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest'; // Default import (muammoni hal qiladi)
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e) tests', () => {
  let app: INestApplication<App>;

  // Har bir testdan oldin ilovani sozlaydi
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // Ilova yopilganda manbalarni bo'shatadi
  afterAll(async () => {
    await app.close();
  });

  // / (GET) endpointini tekshirish
  it('/ (GET) - "Hello World!" javobini kutadi', () => {
    // Endi request o'zgaruvchisi ishlatilmoqda
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
