import React,{Fragment,Component} from 'react'
import uuid from 'uuid'
import {
    ShowListItem
} from './stylecomponent'
class ShowItem extends Component{
    render(){
        return (
            <Fragment>
                {
                   this.props.list.length>=0&&this.props.list.map(item=>{
                       return (
                        <ShowListItem key={uuid()}>
                            {this.renderItem(item)}
                        </ShowListItem>
                       )
                        
                   }) 
                }  
            </Fragment>
        )
    }
    renderItem=(item)=>{
       if(item.label){
            return (
                <div className="jmstore-item item-each" >
                    <img alt="" src={item.image_url_set.main['800']}/>
                </div>
            )
       }else{
           return (
            <div className="jmstore-item item-each">
                <div className="product-img">
                    <img alt="" src={item.image_url_set.dx_image.url['800']} />
                </div>
                <div className="product-detail">
                    <div className="title">{item.name}</div>
                    <div className="price-wrap">
                        <div className="price-list">
                            <span className="jumei-price">￥<span>{item.jumei_price}</span></span>
                            <span className="del-price">￥{item.market_price}</span>
                        </div>
                        <div className="buy-num">{item.product_desc}</div>
                    </div>
                </div>
            </div>
           )
       }
       
    }
    
}
export default ShowItem
