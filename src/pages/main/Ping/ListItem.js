import React, { Component,Fragment } from 'react';
import axios from 'axios'
class ListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            lists:[],
            p:1
        }
    }
    render(){
        return (
            <Fragment>
                {
                    this.state.lists.length>0 && this.state.lists.map(item=>this.renderItem(item))
                }
            </Fragment>
            
        )
    }
    renderItem =(item)=>{
            return (
                <a className="list-item" key={item.item_id}>
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
                            <span className="goods-btn">去开团</span>
                        </div>
                    </div>
                </a>
            ) 
    }
    //每次点击切换时，相当于切换了组件
    componentWillMount(){
        axios({
            url:`/api/yiqituan/tab_list?tab=${this.props.type}&page=${this.state.p}&per_page=20`
        }).then((res)=>{
            this.setState((prevState)=>{
                prevState.lists.push(...res.data.data)
                return prevState
            })
        })
    }
}
export default ListItem