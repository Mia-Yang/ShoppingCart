const { convertToUpperCase } = require('./cartService');

test('should convert values to uppercase', () => {
  const example = {
    id: 1,
    name: 'Fifa',
    label: 'ps4',
    price: 10,
    quantity: 99,
    imgUrl:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.58cdn.com.cn%2Fzhuanzh%2Fn_v2dc4e3471cf4c4b7484b4fd3c84ad488d.jpg%3Fw%3D750%26h%3D0&refer=http%3A%2F%2Fpic4.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613103256&t=e1a79f4df537b7d5a36bce65ebc890b5',
  };

  const uppercaseExample = convertToUpperCase(example);
  expect(uppercaseExample.name).toBe('FIFA');
  expect(uppercaseExample.label).toBe('PS4');
});
