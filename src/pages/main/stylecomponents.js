import styled from 'styled-components'

//外层容器
export const MainWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background:#fff; 

`
export const MainTabIcon = styled.div`
    width: .586667rem;
    height: .586667rem;
    background: ${props=>`url(${props.url}) center center /  .56rem .56rem no-repeat`}
`
