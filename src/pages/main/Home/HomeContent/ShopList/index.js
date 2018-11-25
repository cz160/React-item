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
           url:`/mock/${this.props.type}.json`
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