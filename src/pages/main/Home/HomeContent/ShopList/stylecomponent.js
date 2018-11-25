import styled from 'styled-components'

export const ShowListWrap = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    font-size:.373333rem;
    background:#f5f5f5;
`
export const ShowListItem = styled.a`
    margin-bottom: .213333rem;
    .item-each{
        position: relative;
        overflow: hidden;
        background: #fff;
    }
    .jmstore-item{
        height:3.466667rem;
        .product-img{
            position: relative;
            height: 100%;
            img{
                height:100%;
            }
        }
        .product-detail{
            position: absolute;
            top: 0;
            left: 0;
            margin-right: .64rem;
            margin-left: 4.266667rem;
            height: 100%;
            .title{
                margin-top: .266667rem;
                color: #333;
                font-size: .346667rem;
                line-height: .453333rem;
                max-height: 1.36rem;
                overflow: hidden;
                margin-bottom: .133333rem;
            }
            .price-wrap{
                position: absolute;
                bottom: .64rem;
                .price-list{
                    color: inherit;
                    .jumei-price{
                        color: #fe4070;
                        font-size: .32rem;
                        span{
                            font-size: .533333rem;
                            margin: 0 .053333rem;
                        }
                    }
                    .del-price{
                        color: #999;
                        font-size: .32rem;
                        text-decoration: line-through;
                    }
                }
                .buy-num{
                    color: #999;
                    font-size: .293333rem;
                }
            }
        }
    }
`