export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      const newState = state;
      return newState.concat(action.items);

    case 'REMOVE_ITEM':
      return state.filter((product) => product.id !== action.id);

    case 'CHANGE_QUANTITY':
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: (product.quantity += action.diff) }
          : product
      );

    default:
      return state;
  }
};
