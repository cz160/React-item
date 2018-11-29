import { PullToRefresh, ListView, Button } from 'antd-mobile';
import React from 'react'
import ReactDOM from 'react-dom'
import  Header  from './Header'
import axios from 'axios'
import {util_decorator} from '@L/decorator'
import {
    ListWrapper,
    ListContent,
    ListItem,
    ListItemInfo
} from './styledComponent'
//使用装饰器来修饰一个类
@util_decorator
class List extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.datasource = [] // 替身数据，因为dataSource数据不能加入新数据
    this.state = {
      dataSource,  //数据源
      refreshing: true, //是否正在刷新中
      isLoading: true, //是否正在加载中
      hasMore:true,  //是否还有更多数据
      height: document.documentElement.clientHeight,
    };
    this.pageSize = 10 // 控制每页多少
    this.pageNum  = 1 // 控制页数
  }
  //初始化加载一次数据
  componentDidMount() {
    console.log(this.formatNumber)
    this.handleData()
  }
  //每次获取数据的方法
  getItemAsync(){
    return axios.get('/mock/cookbook-list.json')
                .then(res=>{
                    //获取到对应页面的数据
                    let data = this.getItemByPage(res.data.data);
                    this.pageNum++;
                    this.datasource=[...this.datasource, ...data] // 给替身添加数据
                     // 如果没有数据了
                    if ( this.datasource.length >= res.data.data.length ) {
                        this.setState({ hasMore: false })
                    }  
                    return data  
                })
  }
  //根据页码信息返回对应页面的数据
  getItemByPage(data){  
    let start = (this.pageNum-1)*this.pageSize
    let end = start+this.pageSize
    return data.slice(start,end)
  }
  // 获取数据后，更改真正的数据源，并且操作开关
  handleData(){
    setTimeout(async () => {
        let data = await this.getItemAsync()
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.datasource),
            refreshing: false,
            isLoading: false
        })
    }, 1000)   
  }
  //下拉刷新
  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true })
    // 因为是下拉属性，相当于要重新获取数据，重置页数...
    this.pageNum = 0
    if (!this.state.hasMore) this.setState({ hasMore: true })
    this.handleData()
  };
  //上拉加载
  onEndReached = (event) => {
    if (this.state.isLoading || !this.state.hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    this.handleData()
  };

  render() {
    //渲染每个item
    const row = (rowData, sectionID, rowID) => {
        // rowData 每一个数据，sectionID，每个组的id，rowID 每个item的id
        return (
            <ListItem key = {rowID}>
                <img alt='' src = {rowData.img}/>
                <ListItemInfo>
                    <h1>{rowData.name}</h1>
                    <h4>{rowData.burdens}</h4>
                    <p>
                        {this.formatNumber(rowData.all_click)} 
                        浏览&nbsp;&nbsp; 
                        {this.formatNumber(rowData.favorites)}
                        收藏
                    </p>
                </ListItemInfo>
            </ListItem>
        )
    };
    return (
    
    <ListWrapper>
         <Header
            fixed = { true }
        >菜谱列表</Header>
        <ListContent>
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: '0px 30px 30px 30px', textAlign: 'center' }}>
                    {this.state.isLoading ?  '正在加载...' : (!this.state.hasMore && '没有更多了')}
                </div>)}
                renderRow={row}
                style={{
                height: this.state.height, //屏幕的高度
                border: '1px solid #ddd',
                margin: '5px 0',
                }}
                //下拉刷新
                pullToRefresh={<PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    indicator = {{
                        activate: '放手就刷新', // 已经扯出来
                        deactivate: '下拉去刷新', // 没有拉出来
                        release: '请稍等...', //  开始转
                        finish: '已经加载了新的数据' // 完成
                    }}
                />}
                onEndReached={this.onEndReached}
                pageSize={10} //限制每次加载渲染出几个在页面
            />
        </ListContent>
    </ListWrapper>);
  }
}
export default List