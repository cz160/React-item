import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
export const HomeContentNav = styled.div`
    width:100%;
    height:1.173333rem;
    color: #666;
`
export const OwnNavLink = styled(NavLink)`
    width:50%;
    height:100%;
    display:inline-block;
    line-height:1.173333rem;
    text-align:center;
    /*选中时颜色*/
    &.active{
        color: #fe4070;
    }
    color: #666;
`
export const Foot = styled.footer`
    height:4.906667rem;
    padding-left: .32rem;
    padding-right: .32rem;
    padding-bottom: 58.594;
    background: #fff;
    overflow: hidden;
    .footer-image{
        padding-top: .346667rem;
    }
    .tab{
        width:100%;
        height:.88rem;
        margin: .266667rem auto 0;
        text-align: center;
        display:flex;
        justify-content:center;
        span{
            border: .026667rem solid #e3e3e3;
            line-height: .826667rem;
            color: #666;
            font-size: .373333rem;
            height:.826667rem;
            width: 2.24rem;
            border-radius: 1.25rem;
        }
        .active{
            color: #fe4070;
        }
    }
    .bottom-rights{
        margin: .613333rem auto .32rem;
        color: #999;
        width: 100%;
        text-align: center;
        p{
            font-size: .373333rem;
        }
    }
`