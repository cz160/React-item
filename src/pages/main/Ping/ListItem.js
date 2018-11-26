import React, { Component,Fragment } from 'react';
import uuid from 'uuid'
class ListItem extends Component{
    render(){
        return (
            <Fragment>
                {
                    this.props.lists.length>0 && this.props.lists.map(item=>this.renderItem(item))
                }
            </Fragment>
            
        )
    }
    renderItem =(item)=>{
            return (
                <a className="list-item" key={uuid()}>
                    <div className="people-number">{item.buyer_number_text}</div>
                    <div className="goods-topsmall">
                        <img alt="" src={item.image} />
                    </div>
                    <div className="goods-middle">
                        <span className="goods-num">{item.group_name_tag}</span><span>{item.short_name}</span>
                    </div>
                    <div className="goods-foot">
                        <div className="price-left">
                            <span className="ct-price">{item.jumei_price}</span>
                            <span className="sc-price">{item.market_price}</span>
                            <span className="jm-price">{item.single_price}</span>
                        </div>
                        <div className="time-right">
                            <span className="goods-btn">购买</span>
                        </div>
                    </div>
                </a>
            ) 
    }
}
export default ListItem