const { productSchemaModel } = require('../repository/cartRepository');
const products = [
  {
    id: 1,
    name: 'Fifa',
    label: 'ps4',
    price: 10,
    quantity: 99,
    imgUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
  },
  {
    id: 2,
    name: 'Glacier White 500GB',
    label: 'ps4',
    price: 249.99,
    quantity: 1,
    imgUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
  },
  {
    id: 3,
    name: 'Platinum Headset',
    label: 'ps4',
    price: 119.99,
    quantity: 1,
    imgUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
  },
];

const importData = async () => {
  try {
    await productSchemaModel.deleteMany({});
    await productSchemaModel.insertMany(products);
    process.exit();
  } catch (error) {
    console.error('import data failed', error);
    process.exit(1);
  }
};

importData();
