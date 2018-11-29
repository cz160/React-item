import React, { Component } from 'react'
import { HeaderContainer } from './styledComponent'
class Header extends Component {

    render () {
        return (
            <HeaderContainer fixed = {this.props.fixed}>
               <div className = "center">{this.props.children}</div>
            </HeaderContainer>
        )

    }

}

export default Header