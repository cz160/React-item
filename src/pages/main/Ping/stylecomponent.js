import styled from 'styled-components'

export const PingNav = styled.div`
    width:100%;
    height:44px;
    .am-whitespace-md{
        height:0px !important;
    }
    overflow:hidden;
`
export const PingList = styled.section`
    display: 'flex';
    align-Items: 'center';
    justify-Content: 'center';
    background: #fff;
    .list-item{
        width: 100%;
        overflow: hidden;
        position: relative;
        .people-number{
            width:84px;
            height:24px;
            font-size: 11px;
            padding: 4px 7px;
            position: absolute;
            left: 0;
            top: 2.85rem;
            z-index: 1;
            border: 1px solid #eee;
            border-left: 0;
            border-top-right-radius: 1.5625rem;
            border-bottom-right-radius: 1.5625rem;
            color: #666;
            background: rgba(251,251,251,.8);
        }
        .goods-topsmall{
            overflow: hidden;
            text-align: center;
            img{
                width:150px;
                height:150px;
                margin: 0 auto;
            }
        }
        .goods-middle{
            font-size: 14px;
            max-height: 34px;
            line-height: 18px;
            padding: 0 12px;
            margin-top: 10px;
            color: #424242;
            overflow: hidden;
            .goods-num{
                display:inline-block;
                margin-left: 2px;
                margin-right: 5px;
                color: #fe4070;
            }
        }
        .goods-foot{
            padding: 12px 12px 12px 12px;
            overflow: hidden;
            margin-bottom: 8px;
            .price-left{
                float: left;
                font-family: Arial;
                .ct-price{
                    font-size: 18px;
                    color: #fe4070;
                }
                .sc-price{
                    font-size: 12px;
                    padding-left: 4px;
                    color: #999;
                    text-decoration: line-through;
                }
                .jm-price{
                    font-size: 11px;
                    color: #999;
                    display: block;
                }
            }
            .time-right{
                border-radius: 25px;
                float: right;
                border: .0625rem solid #fe4070;
                margin-top: .25rem;
                background: #fe4070;
                .goods-btn{
                    display:inline-block;
                    width:87px;
                    height:26px;
                    line-height:26px;
                    border-radius:25px;
                    font-size:14px;
                    text-align:center;
                }
            }
        }
    }
`
export const ContentWrap = styled.div`
    background: #f5f5f5;
    height:573px;
    overflow:hidden;
`