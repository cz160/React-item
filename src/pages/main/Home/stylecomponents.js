import styled from 'styled-components'

//头部
export const HomeHead = styled.header`
    width:100%;
    height:1.2rem;
    overflow:hidden;
    line-height:1.2rem;
`
//搜索框
export const SearchWrap = styled.a`
    font-size:.373333rem;
    height:.8rem;
    color: #999;
    background: #f5f5f5;
    margin:.213333rem 1.44rem .16rem .533333rem;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 1.25rem;
    img{
        width:.426667rem;
        height:.426667rem;
    }
`
//搜索列表按钮
export const SearchBtn = styled.span`
    position:absolute;
    top:0;
    right:.266667rem;
    img{
        width:.64rem;
        height:.453333rem;
    }
`
//头部导航区域
export const HeadNavContent = styled.div`
    background: #fff;
    width:100%;
    height:500px;
`


 