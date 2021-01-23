import ShoppingCart from './container/ShoppingCart/ShoppingCart';
import OrderSummary from './container/OrderSummary/OrderSummary';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './redux/reducer';
import './App.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer, enhancer);

function App() {
  return (
    <Provider store={store}>
      <div className="content">
        <ShoppingCart />
        <OrderSummary />
      </div>
    </Provider>
  );
}

export default App;
