
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 1.173333rem;
    background: orange;
    padding: 0rem .24rem;
    line-height:1.173333rem;
    .center {
        color: #fff;
        font-size: .48rem;
        text-align:center;
    }
    ${ props => props.fixed ? `position:fixed;z-index: 999;top: 0;`:''}
    
`