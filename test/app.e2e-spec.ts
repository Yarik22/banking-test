import { INestApplication, HttpStatus } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { Category } from 'src/categories/entities/category.entity';
import * as request from 'supertest';


describe('CategoriesController (e2e)', () => {
  let app: INestApplication;
  let createdCategory: Category;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/categories (POST)', async () => {
    const categoryName = 'Test Category';
    const res = await request(app.getHttpServer())
      .post('/categories')
      .send({ name: categoryName })
      .expect(HttpStatus.CREATED);
    
    createdCategory = res.body;

    expect(createdCategory.name).toBe(categoryName);
    expect(createdCategory.id).toBeDefined();
  });

  // it('/categories (GET)', async () => {
  //   const res = await request(app.getHttpServer())
  //     .get('/categories')
  //     .expect(HttpStatus.OK);
    
  //   const categories = res.body;

  //   expect(categories).toContainEqual(createdCategory);
  // });

  // it('/categories/:id (GET)', async () => {
  //   const res = await request(app.getHttpServer())
  //     .get(`/categories/${createdCategory.id}`)
  //     .expect(HttpStatus.OK);
    
  //   const category = res.body;

  //   expect(category).toEqual(createdCategory);
  // });

  // it('/categories/:id (PATCH)', async () => {
  //   const newName = 'Updated Category';
  //   const res = await request(app.getHttpServer())
  //     .patch(`/categories/${createdCategory.id}`)
  //     .send({ name: newName })
  //     .expect(HttpStatus.OK);
    
  //   const updatedCategory = res.body;

  //   expect(updatedCategory.name).toBe(newName);
  //   expect(updatedCategory.id).toEqual(createdCategory.id);
  // });

  // it('/categories/:id (DELETE)', async () => {
  //   const res = await request(app.getHttpServer())
  //     .delete(`/categories/${createdCategory.id}`)
  //     .expect(HttpStatus.OK);
    
  //   const deletedCategory = res.body;

  //   expect(deletedCategory).toEqual(createdCategory);

  //   const getRes = await request(app.getHttpServer())
  //     .get(`/categories/${createdCategory.id}`)
  //     .expect(HttpStatus.NOT_FOUND);

  //   expect(getRes.body.message).toBe(`Category with id ${createdCategory.id} not found`);
  // });
});
