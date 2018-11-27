import styled from 'styled-components'

export const DeteilMain = styled.section`
    font-size: .373333rem;
    .bgc-f{
        background-color: #fff;
    }
    .slide_wrap{
        width:100%;
        height:10rem;
        position:relative;
        .slide{
            height: 100%;
            width: 100%;
            overflow: hidden;
            .swiper-container{
                position: relative;
                height: 100%;
                width: 100%;
                .swiper-wrapper{
                    width:10rem;
                    .swiper-slide{
                        width:10rem;
                        height:10rem;
                        display:inline-block;
                        img{
                            height: 100%;
                            margin: 0 auto;
                            display: block;
                        }
                    }
                }
            }
        }
    }
    .prod_detail{
        width:100%;
        height:1.12rem;
        box-sizing:border-box;
        padding:.4rem .32rem 0rem;
        .normalShow{
            height: .746667rem;
            .cur_price{
                float: left;
                font-size: .746667rem;
                line-height: 0.79333rem;
                color: #f33873;
            }
            .cost_price{
                float: left;
                color: #666;
                font-size: .346667rem;
                line-height: .32667rem;
                margin-left: .106667rem;
                margin-top: .266667rem;
                text-decoration: line-through;
            }
            strong{
                float: right;
                text-align: right;
                font-weight: 400;
                color: #666;
                font-size: 13px;
                margin-top: .25rem;
            }
        }
    }
    .color3 {
    color: #333;
    }
    .fs14 {
        font-size: 14px;
    }
    .desc_wrap{
        padding:10px 12px;
        width:100%;
        box-sizing: border-box;
        line-height: 0.5rem;
        .normal_desc{
            line-height: 0.5rem;
            .desc_iconv2{
                color: #fff;
                margin-right: 4px;
                font-size: 10px;
                padding: 1px 4px;
                background: #fe4070;
                border-radius: 4px;
                box-sizing: border-box;
            }
        }
    }
    .buy-box{
        position: fixed;
        bottom: -1px;
        width: 10rem;
        height: 50px;
        border-top: 1px solid #eee;
        overflow: hidden;
        background-color: #fff;
        display:flex;
        .cart{
            width:119px;
            height:48px;
            line-height:48px;
            text-align:center;
            color: #979797;
        }
        .add-cart-btn,.at-once{
            width:128px;
            height:48px;
            line-height:48px;
            text-align:center;
            background: #fff1f6;
            color: #fe4070;
        }
        .at-once{
            background: #fe4070;
            color:#fff;
        }
    }
`