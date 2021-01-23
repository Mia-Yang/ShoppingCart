import CartItem from './CartItem';
import { fireEvent, render } from '@testing-library/react';

const product = {
  id: 1,
  name: 'Fifa',
  label: 'ps4',
  price: 44,
  quantity: 2,
  imgUrl:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FElectronic-Arts-221545-FIFA-PS4%2Fdp%2FB07DLXBGN8&psig=AOvVaw2-or8qXd_e2E66fpm3NnBK&ust=1610531300354000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjlpuKOlu4CFQAAAAAdAAAAABAN',
};

const onRemove = jest.fn();
const onIncrease = jest.fn();
const onDecrease = jest.fn();

let item;

describe('render cart item', () => {
  beforeEach(() => {
    item = render(
      <CartItem
        id={product.id}
        name={product.name}
        label={product.label}
        price={product.price}
        quantity={product.quantity}
        imgUrl={product.imgUrl}
        props={product}
        onRemove={onRemove}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    );
  });

  it('should call onRemove when click remove', () => {
    const remove = item.getByText('Remove');
    fireEvent.click(remove);
    expect(onRemove).toBeCalledTimes(1);
  });

  it('should call onDecrease when click remove', () => {
    fireEvent.click(item.getAllByRole('button')[0]);
    expect(onDecrease).toBeCalledTimes(1);
  });

  it('should call onIncrease when click remove', () => {
    fireEvent.click(item.getAllByRole('button')[1]);
    expect(onIncrease).toBeCalledTimes(1);
  });

  it('should have name as Fifa', () => {
    expect(item.getByText('Fifa')).not.toBeNull;
  });
  it('should have label as ps4', () => {
    expect(item.getByText('ps4')).not.toBeNull;
  });

  it('should have quantiyt as 4', () => {
    expect(item.getByText('2')).not.toBeNull;
  });
});
