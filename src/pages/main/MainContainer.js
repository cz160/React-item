import React,{Component} from 'react'
import { TabBar } from 'antd-mobile';
import uuid from 'uuid'
import * as Styles from './stylecomponents'

//引入每个页面组件
import Home from './Home'
import Ping from './Ping'
import Cart from './Cart'
import Mine from './Mine'
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      tabs: [
        {id:uuid(), title:'首页',selected:'home',Component:< Home/>,icon:{default:"//p12.jmstatic.com/mcms/89ea87200c623f4c7809f21f2ab4bce8.png",active:"//p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png"}},
        {id:uuid(), title:'拼团',selected:'ping',Component:< Ping/>,icon:{default:"//p12.jmstatic.com/mcms/b51a66ca3ddb31ec0edbd67ea68f7589.png",active:"//p12.jmstatic.com/mcms/562fb7b2ae7bf1cacdc8ed91493e53af.png"}},
        {id:uuid(), title:'购物车',selected:'cart',Component:< Cart/>,icon:{default:"//p12.jmstatic.com/mcms/77b9454e8dd41a060510a445010ac934.png",active:"//p12.jmstatic.com/mcms/35143fe7ab8afbaa41da2ea6e766d62b.png"}},
        {id:uuid(), title:'我的',selected:'mime',Component:< Mine/>,icon:{default:"//p12.jmstatic.com/mcms/829aa091062366a9f7b93cfffaa0e681.png",active:"//p12.jmstatic.com/mcms/482fb198341f583f92f1151eff6b99f0.png"}}
      ]
    }
  }
  //循环渲染每个按钮
  renderTabItems(){
    let { tabs } = this.state
    return tabs.map(tab=>
      <TabBar.Item
            icon={<Styles.MainTabIcon url={tab.icon.default}/>}
            selectedIcon={<Styles.MainTabIcon url={tab.icon.active}/>}
            title={tab.title}
            key={tab.id}
            selected={this.state.selectedTab === tab.selected}
            onPress={() => {
              this.setState({
                selectedTab: tab.selected
              });
            }}
          >
           {tab.Component}
          </TabBar.Item>
    )
  }
  render() {
    return (
      <Styles.MainWrapper>
        <TabBar
          //为选中字体颜色
          unselectedTintColor="#C0C0C0"
          //选中时字体颜色
          tintColor= "#FE4070"
          //tabbar 背景色
          barTintColor="#fff"
        >
          {this.renderTabItems()}
        </TabBar>
      </Styles.MainWrapper>
    );
  }
}
export default MainContainer