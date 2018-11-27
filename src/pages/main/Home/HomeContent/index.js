import React, { Component,Fragment} from 'react';
import {HomeContentNav,OwnNavLink} from './stylecomponents'
import {Route,Redirect,Switch} from 'react-router-dom'
import ShopList from './ShopList'
import  Footer from './foot'
class HomeContent extends Component {
  constructor(props){
    super(props)
    this.state = {
        lists:[
            {id:0,path:'/main/today',title:'今日10点上新',type:"formal"},
            {id:1,path:'/main/tomoto',title:'明日10点预告',type:"pre"}
        ]
    }
  }
  render() {
    return (
        <Fragment>
            <HomeContentNav>
                {
                    this.state.lists.map(item=><OwnNavLink key={item.id} to={item.path}>{item.title}</OwnNavLink>)
                }
                <Switch>
                    <Redirect exact from="/main" to="/main/today" />
                    {
                        this.state.lists.map(item=> <Route exact key={item.id} path={item.path} render={()=>{return <ShopList {...item} /> }} />)
                    }
                </Switch>
                <Footer  />
            </HomeContentNav>
        </Fragment>
    );
  }
}
export default HomeContent