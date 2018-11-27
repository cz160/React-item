import React,{Component,Fragment} from 'react'
import qs from 'qs'
import url from 'url'
import HeadCommon from '@C/common/Head'
import Swiper from 'swiper'
import {DeteilMain} from './stylecomponent'
import {connect} from 'react-redux'
import actionCreators from '../../store/Cart/actionCreators'
class DeteilWrap extends Component{
    componentWillMount(){
        let prams = qs.parse(url.parse(this.props.location.search).query)
        this.props.dispatch(actionCreators.AsyncChange(prams))
    }
    render(){
        return (
            <Fragment>
                {this.renderContent(this.props.list)}
            </Fragment>
        )
    }
    componentDidUpdate(){
        var mySwiper = new Swiper('.swiper-container')
    }
    renderContent(item){
        if(item.item_id){
            return (
                <DeteilMain key={item.item_id}>
                    <HeadCommon title={item.name} />
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
                            <span className="cur_price">￥{item.jumei_price}</span>
                            <del className="cost_price">￥{item.market_price}</del>
                            <strong>{item.buyer_number}人购买</strong>
                        </div>
                    </article>
                    <div className='desc_wrap bgc-f fs14 color3'>
                        <div className='normal_desc'>
                            <span className='desc_iconv2 fs14'>聚美自营</span>{item.name}
                        </div>
                    </div>
                    <div className='additional-info bgc-f'>
                        <div className='postage-wrap post-box'>
                            <div className='postage-type'>分期</div>
                            <div className='postage-content'>
                                <span className='tip-word'>{item.fen_qi.sale_msg?item.fen_qi.sale_msg:item.fen_qi.quota_msg}</span>
                            </div>
                        </div>
                        <div className='postage-wrap post-box' style={{border:'none'}}>
                            <div className='postage-type'>运费</div>
                            <div className='postage-content'>
                                <span>{item.freight.text}</span>
                            </div>
                        </div>
                        <div style={{height:'50px'}} className='bgc-f'></div>
                    </div>
                    <div className='buy-box'>
                        <div className='cart'>购物车</div>
                        <div className='add-cart-btn' onClick={()=>{
                            let query = {name:item.name,id:item.id,img_url:item.img,price:item.jumei_price,count:1}
                            this.props.dispatch(actionCreators.addCart(query))
                        }}>加入购物车</div>
                        <div className='at-once'>立即购买</div>
                    </div>
                </DeteilMain>
            )
        }else{
            return ''
        }
    }
}
const mapStateToProps = (state)=>{
    return {
        list:state.cart.list
    }
}

export default connect(mapStateToProps)(DeteilWrap)