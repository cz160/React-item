import styled from 'styled-components'

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
        padding: 0 12px;
        text-align: center;
    }
    .go-stroll{
        width: 125px;
        height: 36px;
        border-radius: 1.25rem;
        color: #fff;
        background: #fe4070;
        line-height: 36px;
        text-align: center;
        margin-top: 0.8rem;
        font-size: .4rem;
    }
`