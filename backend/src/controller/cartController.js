const express = require('express');
const router = express.Router();
const url = '/shoppingCart';
const {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  changeQuantity,
} = require('../service/cartService');

router.get(url, (req, res) => {
  getAllProducts(req, res);
});

router.get(`${url}/:id`, (req, res) => {
  getProductById(req, res);
});

router.post(`${url}`, (req, res) => {
  addProduct(req)
    .then((data) => res.status(201).send(data))
    .catch((err) => {
      throw new Error(err);
    });
});

router.delete(`${url}/:id`, (req, res) => {
  deleteProduct(req, res);
});

router.patch(`${url}/:id`, (req, res) => {
  changeQuantity(req, res);
});
module.exports = router;
