const request = require('supertest');
const express = require('express');

const app = require('./index');

const product = {
  id: 1,
  name: 'Fifa',
  label: 'ps4',
  price: 10,
  quantity: 99,
  imgUrl:
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
};

describe('send request to /shoppingCart', function () {
  it('should get 200 status code when sending get request', function (done) {
    request(app).get('/shoppingCart').expect(200, done);
  });

  it('should get 200 status code when sending getbyid request', function (done) {
    request(app).get('/shoppingCart/1').expect(200, done);
  });

  it('should get 200 status code when sending post request successfully', function (done) {
    request(app)
      .post('/shoppingCart')
      .send(product)
      .set('Accept', 'application/json')
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it('should get 200 status code when sending patch request successfully', function (done) {
    request(app)
      .patch('/shoppingCart/1')
      .send({ quantity: 10 })
      .set('Accept', 'application/json')
      .expect(200, { n: 1, nModified: 1, ok: 1 })
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it('should get 200 status code when sending delete request successfully', function (done) {
    request(app)
      .delete('/shoppingCart/1')
      .expect(200, { n: 1, ok: 1, deletedCount: 1 })
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
