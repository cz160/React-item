import React, { Component,Fragment} from 'react';
import HeadCommon from '@C/common/Head'
import {CartBody,CartList,GoCartWrap} from './stylecomponent'
import {connect} from 'react-redux'
class Cart extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'购物车',
      allPrice:0
    }
  }
  componentWillMount(){
     if(this.props.data.length>0){
       let {data} = this.props;
       let all = 0;
       for(var i=0;i<data.length;i++){
          all=all+(~~data[i].count*~~data[i].price)
       }
       this.setState((prevState)=>{
          prevState.allPrice=all;
          return prevState
       })
     }
  }
  render() {
    return (
      <Fragment>
        <HeadCommon title={this.state.title}/>
        {
          this.props.data.length<=0?(
            <CartBody>
              <div className="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
              <div className="go-stroll">去逛逛</div>
            </CartBody>
          ):(
          <Fragment>  
              <div style={{height:'525px',backgroundColor:'#f5f5f9',overflow:'scroll'}}>
                  {
                    this.props.data.map(item=>this.renderContent(item))
                  }
              </div>
              <GoCartWrap key='1'>
                  <div className="sub-info">
                    <input type='checkbox'  />
                    <span className="all-check-text">全选</span>
                    <div className="summary">
                      <span>合计</span>
                      <span className='red'>¥{this.state.allPrice}</span>
                    </div>
                  </div>
                  <div className="submit-btn">去结算</div>
              </GoCartWrap> 
            </Fragment> 
          )
        }
      </Fragment>   
    )
  }
  renderContent(item){
      return (
            <CartList key={item.id}>
                <div className="item">
                  <input type="checkbox"   className='check' />
                  <div className="item-content">
                    <img alt="" src={item.img_url} />
                    <div className="text-wrap">
                      <span className='title'>
                        <span className='red'>极速免税</span>{item.name}
                        <div className="sub-title-1">
                          <span>120ml+120ml</span>
                          <span>×{item.count}</span>
                        </div>
                        <div className='price-edit'>
                          <span className='price'>¥{item.price}</span>
                          <span className='edit'>编辑</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>      
            </CartList>
      )
  }
}
const mapStateToProps = (state)=>{
  return {
      data:state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart)



