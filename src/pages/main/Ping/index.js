import React, { Component,PureComponent} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { PingNav,PingList} from './stylecomponent'
import BScroll from 'better-scroll'
import ListItem from './ListItem'
import axios from 'axios'
class Ping extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      type:'coutuan_home',
      lists:[],
      tabs:[
        {title:'推荐',type:'coutuan_home'},
        {title:'母婴健康',type:'coutuan_baby'},
        {title:'美妆',type:'coutuan_makeup'},
        {title:'家居',type:'coutuan_furniture'},
        {title:'鞋类',type:'coutuan_shose'},
        {title:'礼品箱包',type:'coutuan_bag'},
        {title:'食品保障',type:'coutuan_food'},
        {title:'饰品配饰',type:'coutuan_jewellery'},
        {title:'数码家电',type:'coutuan_3c'},
        {title:'内衣',type:'coutuan_underwear'},
        {title:'女装',type:'coutuan_ladies'},
        {title:'下期预告',type:'coutuan_pre'}
      ],
    }
  }
  render(){
    return (
      <PingNav>
        <WhiteSpace />
        <Tabs tabs={this.state.tabs}
        tabBarUnderlineStyle={{'borderColor':'#fe4070'}}
        tabBarActiveTextColor="#fe4070"
        tabBarInactiveTextColor='#666'
        prerenderingSiblingsNumber={0}
        swipeable={false}
        animated={false}
        onTabClick={(data)=>{
            //点击修改type，重新传递type值给子组件
            this.setState({
              type:data.type
            })
        }}
        tabBarTextStyle={{fontSize:'14px'}}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
          {this.renderContent()}
        </Tabs>
        <WhiteSpace />
      </PingNav>
      
    )
  }
  //渲染内容
  renderContent =()=>{
    return (
      <div style={{height:'590px',overflow:'hidden'}} ref={el=>this.el=el}>
          <PingList>   
              <ListItem type={this.state.type} scroll={this.scroll}/> 
          </PingList>
      </div> 
    );
  }
  componentDidMount(){
    //初始化实例化
    this.scroll = new BScroll(this.el,{
      click: true,
      scrollY: true,
      pullUpLoad: {
          threshold: 50
      }
    })
  }
  componentDidUpdate(){
    //更新之后实例化后面的组件
    this.scroll = new BScroll(this.el,{
      click: true,
      scrollY: true,
      pullUpLoad: {
          threshold: 50
      }
    })
  }
}
export default Ping

