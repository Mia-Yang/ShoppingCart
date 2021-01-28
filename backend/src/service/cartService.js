const { productSchemaModel } = require('../repository/cartRepository');

const convertToUpperCase = (data) => {
  for (let key in data) {
    if (key === 'name' || key === 'label') {
      data[key] = data[key].toUpperCase();
    }
  }
  return data;
};

const getAllProducts = (req, res) => {
  return new Promise((resolve, reject) => {
    productSchemaModel.find((err, data) => {
      if (err) {
        reject(res.send('get products failed'));
      } else {
        data.forEach((prod) => convertToUpperCase(prod));
        resolve(res.send(data));
      }
    });
  });
};

const getProductById = (req, res) => {
  return new Promise((resolve, reject) => {
    productSchemaModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
        reject(res.send('get product failed'));
      } else {
        data.forEach((prod) => convertToUpperCase(prod));
        resolve(res.send(data));
      }
    });
  });
};

const addProduct = (req, res) => {
  const id = req.params.id;
  const product = req.body;

  return new Promise((resolve, reject) => {
    let newProduct = productSchemaModel({
      id: product.id,
      name: product.name,
      label: product.label,
      price: product.price,
      quantity: product.quantity,
      imgUrl: product.imgUrl,
    });
    newProduct.save((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const deleteProduct = (req, res) => {
  return new Promise((resolve, reject) => {
    productSchemaModel.deleteOne({ id: req.params.id }, (err, data) => {
      if (err) {
        reject(res.send('delete failed'));
      } else {
        resolve(res.send(data));
      }
    });
  });
};

const changeQuantity = (req, res) => {
  return new Promise((resolve, reject) => {
    productSchemaModel.updateOne(
      { id: req.params.id },
      { $set: { quantity: req.body.quantity } },
      (err, data) => {
        if (err) {
          reject(res.send('update failed'));
        } else {
          resolve(res.send(data));
        }
      }
    );
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  changeQuantity,
  convertToUpperCase,
};
