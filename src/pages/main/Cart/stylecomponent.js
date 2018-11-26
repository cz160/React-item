import styled from 'styled-components'
//没有商品
export const CartBody = styled.div`
    display: flex;
    flex: 1;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .empty-cart{
        font-size: .4.35rem;
        line-height: .5rem;
        color: #333;
        margin-top: 5rem;
        padding: 0 .32rem;
        text-align: center;
    }
    .go-stroll{
        width: 3.333333rem;
        height: .96rem;
        border-radius: 1.25rem;
        color: #fff;
        background: #fe4070;
        line-height: .96rem;
        text-align: center;
        margin-top: 0.8rem;
        font-size: .4rem;
    }
`
export const CartList = styled.div`
    margin-top: .5rem;
    background:#fff;
    .item{
        padding:0rem .32rem 0 .213333rem;
        height:2.773333rem;
        display:flex;
        .check{
            width:.533333rem;
            height:.533333rem;
            margin-top:1.2rem;
        }
        .item-content{
          flex:1;
            display:flex;
            align-items:center;
            img{
                width:2.24rem;
                height:2.24rem;
            }
            .text-wrap{
                flex:1;
                margin-top:.373333rem;
                margin-left:.266667rem;
                height:2.293333rem;
                display:flex;
                flex-direction: column;
                .title{
                    text-align:left;
                    width:6.213333rem;
                    height:1.28rem;
                    font-size: .32rem;
                    text-overflow: ellipsis;
                    color: #333;
                    .red{
                        color: #fe4070;
                    }
                }
                .sub-title-1{
                    margin-top:.266667rem;
                    height:.32rem;
                    color: #999;
                    line-height:.32rem;
                    display:flex;
                    justify-content: space-between;
                }
                .price-edit{
                    margin-top:.32rem;
                    height:.586667rem;
                    display:flex;
                    justify-content: space-between;
                    .price{
                        color: #fe4070;
                        font-size: .5rem;
                    }
                }
            }
        }
    }
`
export const GoCartWrap = styled.div`
    height:50px;
    padding:0 12px 0 8px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    .sub-info{
        width:138px;
        height:20px;
        display:flex;
        input{
            width:.533333rem;
            height:.533333rem;
        }
        .all-check-text{
            margin-left:12px;
            color: #333;
            font-size:0.325rem;
            line-height:20px;
        }
        .summary{
            margin-left:5px; 
            color: #999;
            line-height:20px;
            .red{
                margin-left:3px;
                color: #fe4070;
                font-size: 0.5rem;
            }
        }
    }
    .submit-btn{
        width:125px;
        height:36px;
        background: #fe4070;
        border-radius: 0.5rem;
        line-height:36px;
        text-align:center;
        color:#fff;
    }
    
`