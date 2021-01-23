const url = 'http://localhost:3001/shoppingCart';

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  id,
});

export const removeItemInDatabase = (id) => {
  return (dispatch) => {
    fetch(`${url}/${id}`, { method: 'DELETE' })
      .then(() => dispatch(removeItem(id)))
      .catch((err) => console.log(err));
  };
};

export const receiveItems = (items) => ({
  type: 'RECEIVE_ITEMS',
  items,
});

export const fetchItems = () => {
  return (dispatch) => {
    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => dispatch(receiveItems(data)));
  };
};

export const changeQuantity = (id, diff) => ({
  type: 'CHANGE_QUANTITY',
  id,
  diff,
});

export const changeQuantityInDatabase = (id, originQuantity, diff) => {
  const newQuantity = { quantity: originQuantity + diff };
  return (dispatch) => {
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuantity),
    })
      .then(() => dispatch(changeQuantity(id, diff)))
      .catch((err) => console.log(err));
  };
};
