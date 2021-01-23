import './CartItem.scss';
function CartItem(props) {
  const { name, label, quantity, imgUrl, price } = props;
  return (
    <>
      <td>
        <img src={imgUrl} alt="product img" className="productImg" />
      </td>
      <td className="infoCell">
        <span className="name">{name}</span>
        <span className="label">{label}</span>
        <span onClick={props.onRemove} className="remove">
          Remove
        </span>
      </td>
      <td>
        <div className="counter">
          <button
            className="changeUnit"
            onClick={props.onDecrease}
            disabled={quantity === 1 ? true : false}
          >
            ➖
          </button>
          <span className="quantity">{quantity}</span>
          <button className="changeUnit" onClick={props.onIncrease}>
            ➕
          </button>
        </div>
      </td>
      <td>￡ {price}</td>
      <td>￡ {(quantity * price).toFixed(2)}</td>
    </>
  );
}

export default CartItem;
