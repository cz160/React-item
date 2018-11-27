import React,{Component,Fragment} from 'react'
import qs from 'qs'
import url from 'url'
import axios from 'axios'
import HeadCommon from '@C/common/Head'
import Swiper from 'swiper'
import {DeteilMain} from './stylecomponent'
class DeteilWrap extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            list:[]
        }
    }
    render(){
        console.log(this.state.list)
        return (
            <Fragment>
                {
                    this.state.list.length>0&&this.state.list.map(item=>{
                        return (
                            <DeteilMain key={item.item_id}>
                                <HeadCommon title={this.state.name} />
                                <article className="slide_wrap bgc-f">
                                    <div className='slide'>
                                        <div className="swiper-container">
                                             <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img alt='' src={item.img} />
                                                </div>
                                             </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="prod_detail bgc-f">
                                    <div className='normalShow'>
                                        <span className="cur_price">￥319</span>
                                        <del className="cost_price">￥550</del>
                                        <strong>345人购买</strong>
                                    </div>
                                </article>
                                <div className='desc_wrap bgc-f fs14 color3'>
                                    <div className='normal_desc'>
                                        <span className='desc_iconv2 fs14'>聚美自营</span>【平价代替香奶奶268】NYX16色眼影盘
                                    </div>
                                </div>
                                <div className='buy-box'>
                                    <div className='cart'>购物车</div>
                                    <div className='add-cart-btn'>加入购物车</div>
                                    <div className='at-once'>立即购买</div>
                                </div>
                            </DeteilMain>
                        )
                    })
                }
            </Fragment>
        )
    }
    componentWillMount(){
        let prams = qs.parse(url.parse(this.props.location.search).query)
        axios({
            url:`/h5/product/ajaxDynamicDetail?item_id=${prams.id}&type=${prams.type}`
        }).then(res=>{
            this.setState((prevState)=>{
                prevState.name=prams.name
                prevState.list.push(res.data.data.result)
                return prevState
            })
        })
    }
    componentDidUpdate(){
        var mySwiper = new Swiper('.swiper-container')
    }
}
export default DeteilWrap