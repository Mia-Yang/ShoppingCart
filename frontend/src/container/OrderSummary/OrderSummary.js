import React from 'react';
import './OrderSummary.scss';
import { connect } from 'react-redux';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingFee: 5,
    };
  }

  getTotalCost = (productList) => {
    let totalCost = 0;
    for (const product of productList) {
      let { price, quantity } = product;
      let productTotal = price * quantity;
      totalCost += productTotal;
    }
    return totalCost;
  };

  handleChangeShipping = (e) => {
    this.setState({
      shippingFee: parseInt(e.target.value),
    });
  };

  render() {
    const { productList } = this.props;
    let totalCost = this.getTotalCost(productList);
    return (
      <div className="summary">
        <div className="title">Order Summary</div>
        <div className="split"></div>
        <div className="calculate">
          <div className="summary-subtitle total-price">
            <span>ITEMS {productList.length}</span>
            <span id="without-express-fee">￡ {totalCost.toFixed(2)}</span>
          </div>
          <div className="summary-subtitle">SHIPPING</div>
          <select
            name="shipping"
            id="shipping"
            onChange={this.handleChangeShipping}
            value={this.state.value}
          >
            <option value="5">standard shipping - ￡5</option>
            <option value="10">express shipping - ￡10</option>
          </select>
          <div className="summary-subtitle">PROMO CODE</div>
          <input type="text" placeholder="Enter Your Code" className="promo" />
          <br />
          <button className="apply">APPLY</button>
        </div>

        <div className="split"></div>
        <div className="summary-subtitle total-price">
          <span>TOTAL COST</span>
          <span id="with-express-fee">
            ￡ {(totalCost + this.state.shippingFee).toFixed(2)}
          </span>
        </div>
        <button className="checkout">CHECK OUT</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state,
  };
}

export default connect(mapStateToProps)(OrderSummary);
