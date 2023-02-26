import app from '../../app';
import request from 'supertest';
import { reseed } from '../../repositories/products';

describe('products', () => {
  beforeEach(() => {
    reseed();
  });
  it('returns status code 200 when getting all products', async () => {
    const res = await request(app).get('/api/products');

    expect(res.statusCode).toEqual(200);
  });
  it('returns all products', async () => {
    const res = await request(app).get('/api/products');

    expect(res.body).toStrictEqual([
      {
        id: '631f96d1ececd5ea537e7d78',
        description: 'lorem',
        model: 'ADR',
        brand: 'Sony',
      },
      {
        id: '631f96dd9f9f0ba047c65158',
        description: 'lorem',
        model: 'EFW',
        brand: 'Samsung',
      },
      {
        id: '631f96f82d25c0cf011f418e',
        description: 'lorem',
        model: 'WEFW',
        brand: 'LG',
      },
      {
        id: '631f96fdf00c1b6daa7b7b26',
        description: 'lorem',
        model: 'SDV',
        brand: 'Toshiba',
      },
      {
        id: '631f9702cdf4f1a01079d0bd',
        description: 'lorem',
        model: 'UGH',
        brand: 'Lenovo',
      },
    ]);
  });

  it('returns status code 200 when getting a filtered product', async () => {
    const res = await request(app).get('/api/products?type=brand&value=sony');

    expect(res.statusCode).toEqual(200);
  });

  it('returns product when getting a filtered product', async () => {
    const res = await request(app).get('/api/products?type=brand&value=sony');

    expect(res.body).toStrictEqual([
      {
        id: '631f96d1ececd5ea537e7d78',
        description: 'lorem',
        model: 'ADR',
        brand: 'Sony',
      },
    ]);
  });

  it('returns status code 200 when getting a product', async () => {
    const res = await request(app).get(
      '/api/products/631f96d1ececd5ea537e7d78',
    );

    expect(res.statusCode).toEqual(200);
  });

  it('returns product when getting a product', async () => {
    const res = await request(app).get(
      '/api/products/631f96d1ececd5ea537e7d78',
    );

    expect(res.body).toStrictEqual({
      id: '631f96d1ececd5ea537e7d78',
      description: 'lorem',
      model: 'ADR',
      brand: 'Sony',
    });
  });

  it('returns 201 when successfully creating new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ id: '1234', description: 'test', model: 'NSFW', brand: 'Soniq' });

    expect(res.statusCode).toEqual(201);
  });

  it('returns product when successfully creating new product', async () => {
    const res = await request(app).post('/api/products').send({
      id: '1234',
      description: 'test',
      model: 'SDFFF',
      brand: 'Soniq',
    });

    expect(res.body).toStrictEqual({
      id: '1234',
      description: 'test',
      model: 'SDFFF',
      brand: 'Soniq',
    });
  });

  it('returns 200 when successfully updating product', async () => {
    const res = await request(app)
      .put('/api/products/631f96d1ececd5ea537e7d78')
      .send({
        id: '631f96d1ececd5ea537e7d78',
        description: 'loremer',
        model: 'ADR',
        brand: 'Sony',
      });

    expect(res.statusCode).toEqual(200);
  });

  it('returns updated product when successfully updating product', async () => {
    const res = await request(app)
      .put('/api/products/631f96d1ececd5ea537e7d78')
      .send({
        id: '631f96d1ececd5ea537e7d78',
        description: 'lorem',
        model: 'DLSR2000',
        brand: 'Sony',
      });

    expect(res.body).toStrictEqual({
      id: '631f96d1ececd5ea537e7d78',
      description: 'lorem',
      model: 'DLSR2000',
      brand: 'Sony',
    });
  });

  it('returns 200 when successfully deleting product', async () => {
    const res = await request(app).delete(
      '/api/products/631f96d1ececd5ea537e7d78',
    );

    expect(res.statusCode).toEqual(200);
  });

  it('returns true when successfully deleting product', async () => {
    const res = await request(app).delete(
      '/api/products/631f96d1ececd5ea537e7d78',
    );

    expect(res.body).toEqual(true);
  });
});

export {};
