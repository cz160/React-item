import React, { Component,Fragment} from 'react';
import ShopList from '../HomeContent/ShopList'
import  Footer from '../HomeContent/foot'
import {QuickHeadWrap,ContentHead,Wrap} from './stylecomponent'
class QuertContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            type:'formal',
            headlist:[
                {id:0,title:'海外直供',img_src:'//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70'},
                {id:1,title:'原装正品',img_src:'//mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70'},
                {id:2,title:'极速到货',img_src:'//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70'},
                {id:3,title:'轻松退货',img_src:'//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70'}
            ]
        }
    }
    render() {
        return (
            <Wrap>
                <QuickHeadWrap>
                    {
                        this.state.headlist.map(item=>{
                            return (
                                <a key={item.id}>
                                    <img alt="" src={item.img_src}/>
                                    <div className="deals-text">{item.title}</div> 
                                </a>
                            )
                        })
                    }
                </QuickHeadWrap>
                <ContentHead>
                    <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt="" />
                    <span>今日团购，每天10点上新</span>
                </ContentHead>
                <ShopList type={this.state.type}/>
                <Footer />
            </Wrap>
        );
    }
}
export default QuertContent