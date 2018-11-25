import React,{Component} from 'react'
import {CommonHead} from './stylecomponent'
class HeadCommon extends Component{
    render(){
        return (
           <CommonHead>
               <div className="head-back-box">﹤</div>
               <div className="head-title">购物车</div>
               <div className='home'>☞</div>
           </CommonHead>
        )
    }
}
export default HeadCommon