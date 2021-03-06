import React, { Component,Fragment} from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import axios from 'axios'
import { PingNav,PingList,ContentWrap,GoTop} from './stylecomponent'
import BScroll from 'better-scroll'
import ListItem from './ListItem'
// import axios from 'axios'
var p=1;
var type='coutuan_home';
class Ping extends Component {
  constructor(props){
    super(props)
    this.state = {
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
      <Fragment>
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
           this.setState((prevState)=>{
             type=data.type
             this.getInitDate() 
             //切换后回到顶部
             this.scroll.scrollTo(0,0)
             return prevState
           })                        
        }}
        tabBarTextStyle={{fontSize:'14px'}}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
        </Tabs>
        <WhiteSpace />
      </PingNav>
        <ContentWrap className='wrapper'>
          <PingList>
              <ListItem lists={this.state.lists} />
          </PingList>
        </ContentWrap>
        <GoTop ref={el=>this.el=el} onClick={()=>{this.scroll.scrollTo(0,0)}}>
            <img alt="" src="http://f0.jmstatic.com/btstatic/h5/index/go_top.png"/>
        </GoTop>
      </Fragment>
        
    )
  }
  componentDidMount(){
    this.getInitDate()
    this.scroll = new  BScroll('.wrapper',{
        probeType:2,
        click:true,
        pullUpLoad: {
          threshold:-50
        }
    })
    //控制回到顶部按钮
    this.scroll.on('scroll',(position)=>{
      if(position.y<=-100){
        this.el.style.opacity=1;
      }else{
        this.el.style.opacity=0;
      }
    })
    this.scroll.on('pullingUp',async()=>{
        await this.getMoreData()
        this.scroll.finishPullUp()
        this.scroll.refresh();
    })
  }
  //第一次获取数据
  getInitDate(){
    axios({
      url:`/api/yiqituan/tab_list?tab=${type}&page=1&per_page=20`
    }).then((res)=>{
      this.setState((prevState)=>{
          prevState.lists=res.data.data
          return prevState
      })
    })
  }
  //拉动加载更多数据
  getMoreData(){
    p++;
    axios({
      url:`/api/yiqituan/tab_list?tab=${type}&page=${p}&per_page=20`
    }).then((res)=>{
      this.setState((prevState)=>{
          prevState.lists.push(...res.data.data)
          return prevState
      })
    })
  }
}
export default Ping

