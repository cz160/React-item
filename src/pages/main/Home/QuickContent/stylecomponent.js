import styled from 'styled-components'
export const  Wrap=styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: #eee;
` 
export const QuickHeadWrap = styled.section`
    height:2.853333rem;
    background: #fff;
    margin-bottom: .266667rem;
    display:flex;
    a{
        width:25%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        img{
            width: 53.2%;
        }
        .deals-text{
            width: 100%;
            color: #666;
            margin-top: .4rem;
            text-align: center;
            font-size: .32rem;
        }
    }
`
export const ContentHead = styled.section`
    text-align: center;
    height:1.066667rem;
    line-height:1.066667rem;
    background: #fff;
    img{
        width:.4rem;
        height:.4rem;
    }
    span{
        margin-left:.133333rem;
        color: #333;
        font-size: .373333rem;
    }
`