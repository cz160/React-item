import React,{Component} from 'react'
import {
    ShowListWrap
} from './stylecomponent'
import ShowListItem from './ShowItem'
import axiox from 'axios'
class ShopList extends Component{
    constructor(props){
        super(props)
        this.state = {
            lists:[]
        }
    }
    componentDidMount(){
       axiox({
        url:`/h5/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=${this.props.type}&page_key=`
       }).then((res)=>{
            this.setState({
                lists:[...res.data.item_list]
            })
       })
    }
    render(){
        return (
            <ShowListWrap>
                <ShowListItem list={this.state.lists} />
            </ShowListWrap>
            
        )
    }
}
export  default ShopList