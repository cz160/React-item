import React, { Component,Fragment} from 'react';
import HeadCommon from '@C/common/Head'
import {CartBody} from './stylecomponent'
class Cart extends Component {
  render() {
    return (
      <Fragment>
        <HeadCommon />
        <CartBody>
          <div className="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
          <div className="go-stroll">去逛逛</div>
        </CartBody>
      </Fragment>
        
    );
  }
}
export default Cart