import ShoppingCart from './ShoppingCart';
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

describe('render shoppingcart', () => {
  it('mockFetchItems should return productList', () => {
    const mockFetchItems = jest.fn();
    mockFetchItems.mockReturnValue(productList);
    expect(mockFetchItems()[0].quantity).toEqual(1);
    expect(mockFetchItems()).toHaveLength(3);
  });

  it('should render title as Shopping Cart', () => {
    const mockFetchItems = jest.fn();
    mockFetchItems.mockReturnValue(productList);
    const { container } = render(<ShoppingCart fetchItems={mockFetchItems} />, {
      initialState: productList,
    });
    expect(container.querySelector('.title')).toHaveTextContent(
      'Shopping Cart'
    );
  });

  it('should show number of items as 3', () => {
    const mockFetchItems = jest.fn();
    mockFetchItems.mockReturnValue(productList);
    const { container } = render(<ShoppingCart fetchItems={mockFetchItems} />, {
      initialState: productList,
    });
    expect(container.querySelector('.title')).toHaveTextContent('3 Items');
  });

  it('should render three cartitems', () => {
    const mockFetchItems = jest.fn();
    mockFetchItems.mockReturnValue(productList);
    const { container } = render(<ShoppingCart fetchItems={mockFetchItems} />, {
      initialState: productList,
    });
    expect(container.querySelectorAll('.item')).toHaveLength(3);
  });
});
