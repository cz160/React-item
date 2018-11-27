import React,{Component,Fragment} from 'react'
import {
    ShowListWrap
} from './stylecomponent'
import ShowListItem from './ShowItem'
import axiox from 'axios'
var p=1;
class ShopList extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'点击加载更多',
            lists:[]
        }
    }
    componentDidMount(){
       axiox({
        url:`/h5/index/ajaxDealactList?card_id=4057&client_v=1&page=${p}&platform=wap&type=${this.props.type}&page_key=`
       }).then((res)=>{
            this.setState({
                lists:[...res.data.item_list]
            })
       })
    }
    render(){
        return (
            <Fragment>
                <ShowListWrap>
                    <ShowListItem list={this.state.lists} />
                </ShowListWrap>
                <div ref={el=>this.el=el}  style={{height:'30px',lineHeight:'30px',textAlign:'center',color:'#ccc',background:'#fff'}} onClick={()=>{
                    this.setState({
                        title:'正在加载中...'
                    })
                    if(this.state.lists.length>=165){
                        this.setState({
                            title:'没有更多数据了...'
                        })
                        return false;
                    }
                    p++;
                    axiox({
                        url:`/h5/index/ajaxDealactList?card_id=4057&client_v=1&page=${p}&platform=wap&type=${this.props.type}&page_key=`
                    }).then(res=>{
                        this.setState((prevSate)=>{
                            prevSate.lists.push(...res.data.item_list)
                            prevSate.title="点击加载更多"
                            return prevSate
                        })
                    })      
                }   
                }>{this.state.title}</div>
            </Fragment>  
        )
    }
}
export  default ShopList