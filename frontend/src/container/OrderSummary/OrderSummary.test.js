import OrderSummary from './OrderSummary';
import { render } from '../../testUtil';

const productList = [
  {
    id: 1,
    name: 'Fifa',
    label: 'ps4',
    price: 44,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
  },
  {
    id: 2,
    name: 'Fifa',
    label: 'ps4',
    price: 44,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
  },
  {
    id: 3,
    name: 'Fifa',
    label: 'ps4',
    price: 44,
    quantity: 1,
    imgUrl:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
  },
];

let orderSummary = <OrderSummary />;

describe('render orderSummary', () => {
  it('should calculate total price without express fee as 132', () => {
    const { container } = render(orderSummary, {
      initialState: productList,
    });
    const result = container.querySelector('#without-express-fee');
    expect(result).toHaveTextContent('132');
  });

  it('should show total price without express fee as 0 when there is no items in cart', () => {
    const { container } = render(orderSummary, {
      initialState: [],
    });
    const result = container.querySelector('#without-express-fee');
    expect(result).toHaveTextContent('0');
  });

  it('should show total cost as 5 with express feewhen there is no items in cart', () => {
    const { container } = render(orderSummary, {
      initialState: [],
    });
    const result = container.querySelector('#with-express-fee');
    expect(result).toHaveTextContent('5');
  });

  it('should have 2 buttons', () => {
    const { container } = render(orderSummary, {
      initialState: [],
    });
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toEqual(2);
  });

  it('should select standard', () => {
    const { container } = render(orderSummary, {
      initialState: [],
    });
    const select = container.querySelector('select');
    expect(select).toHaveTextContent('standard shipping');
  });
});
