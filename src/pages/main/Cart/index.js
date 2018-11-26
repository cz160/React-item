import React, { Component,Fragment} from 'react';
import HeadCommon from '@C/common/Head'
import {CartBody,CartList,GoCartWrap} from './stylecomponent'
class Cart extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'购物车'
    }
  }
  render() {
    return (
      <Fragment>
        <HeadCommon title={this.state.title}/>
        {/* <CartBody>
          <div className="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
          <div className="go-stroll">去逛逛</div>
        </CartBody> */}
        <div style={{height:'525px',backgroundColor:'#f5f5f9',overflow:'hidden'}}>
        <CartList>
            <div className="item">
              <input type="checkbox"   className='check' />
              <div className="item-content">
                <img alt="" src="https://p2.jmstatic.com/product/003/365/3365132_std/3365132_200_200.jpg" />
                <div className="text-wrap">
                  <span className='title'>
                    <span className='red'>极速免税</span>AHCB5玻尿酸水乳套装
                    <div className="sub-title-1">
                      <span>120ml+120ml</span>
                      <span>×1</span>
                    </div>
                    <div className='price-edit'>
                      <span className='price'>¥168</span>
                      <span className='edit'>编辑</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>      
        </CartList>
        </div>
        <GoCartWrap>
          <div className="sub-info">
            <input type='checkbox'  />
            <span className="all-check-text">全选</span>
            <div className="summary">
              <span>合计</span>
              <span className='red'>¥168</span>
            </div>
          </div>
          <div className="submit-btn">去结算</div>
        </GoCartWrap>
      </Fragment>
        
    );
  }
}
export default Cart