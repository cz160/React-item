import styled from 'styled-components'

export const ListWrapper = styled.section`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
`

export const ListContent = styled.ul`
    width: 100%;
    height: 100%;
    padding-top: 40px;
    >div {
        height: 100%;
    }
`

export const ListItem = styled.li`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    img {
        width: 115px;
        height: 75px;
    }
    border-bottom: 1px solid #f3f3f3;
`
export const ListItemInfo = styled.div`
    padding-left: 15px;
    flex: 1 1;
    height: 75px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    color: #999;
    h1 {
        font-size: 18px;
        color: #333;
        margin: 0;
    }

    h4 {
        font-size: 12px;
    }
    p {
        font-size: 10px;
    }

`