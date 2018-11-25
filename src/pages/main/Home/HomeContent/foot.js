import React,{Component} from 'react'
import {Foot} from './stylecomponents'
class Footer extends Component{
    render(){
        return (
            <Foot>
                <div className="footer-image">
                    <img alt="" src="//s1.jmstatic.com/templates/touch/css/v3/image/footer_bg.jpg" />
                </div>
                <div className="tab">
                    <span className="active">触屏版</span>
                    <span>电脑版</span>
                </div>
                <div className="bottom-rights">
                    <p>©2017 聚美优品 Jumei.com</p>
                </div>
            </Foot>
        )
    }
}
export default Footer