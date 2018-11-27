import styled from 'styled-components'

export const DeteilMain = styled.section`
    height:100%;
    background:#fff;
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
                font-size: .346667rem;
                margin-top: .25rem;
            }
        }
    }
    .color3 {
    color: #333;
    }
    .fs14 {
        font-size: .373333rem;
    }
    .desc_wrap{
        padding:.266667rem .32rem;
        width:100%;
        box-sizing: border-box;
        line-height: 0.5rem;
        .normal_desc{
            line-height: 0.5rem;
            .desc_iconv2{
                color: #fff;
                margin-right: .106667rem;
                font-size: .266667rem;
                padding: .026667rem .106667rem;
                background: #fe4070;
                border-radius: .106667rem;
                box-sizing: border-box;
            }
        }
    }
    .additional-info{
        margin-bottom: .213333rem;
        .post-box{
            margin: 0 .32rem;
            height:.986667rem;
            border-bottom: .026667rem solid #eee;
            .postage-type{
                width: 22%;
                height:.986667rem;
                color: #999;
                display: inline-block;
                font-size: .346667rem;
                line-height: .986667rem;
                vertical-align: top;
            }
            .postage-content{
                color: #333;
                font-size: .346667rem;
                width: 78%;
                overflow: hidden;
                position: relative;
                padding-top: .32rem;
                padding-bottom: .250667rem;
                display: inline-block;
                .tip-word{
                    color: #fe4070;
                }
            }
        }
    }
    .buy-box{
        position: fixed;
        bottom: -0.026667rem;
        width: 10rem;
        height: 1.333333rem;
        border-top: .026667rem solid #eee;
        overflow: hidden;
        background-color: #fff;
        display:flex;
        .cart{
            width:3.173333rem;
            height:1.28rem;
            line-height:1.28rem;
            text-align:center;
            color: #979797;
        }
        .add-cart-btn,.at-once{
            width:3.413333rem;
            height:1.28rem;
            line-height:1.28rem;
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