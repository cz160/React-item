import React, { Component,Fragment} from 'react';
import {HomeContentNav,OwnNavLink} from './stylecomponents'
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
class HomeContent extends Component {
  render() {
    return (
        <Fragment>
            <HomeContentNav>
                <OwnNavLink  to="/today">今日10点上新</OwnNavLink>
                <OwnNavLink to="/tomoto">明日10点预告</OwnNavLink>
                <Switch>
                    <Redirect exact from="/" to="/today" />
                    <Route path="/today" render={()=>{
                        return <div>111</div>
                    }} />
                    <Route path="/tomoto" render={()=>{
                        return <div>222</div>
                    }} />
                </Switch>
            </HomeContentNav>
        </Fragment>
    );
  }
}
export default HomeContent