import defaultSate from './default-state'
import _ from 'lodash'
import {
    Async_CHANGE_LIST,
    ADD_CART_LIST
}from './action-type'
const cart = (prevState=defaultSate,action)=>{
    let new_state = Object.assign({},prevState)
    switch(action.type){
        case Async_CHANGE_LIST+'_FULFILLED':
            //先清空数据
            new_state.list ={...action.payload};break;
        case ADD_CART_LIST :
            if(new_state.cart.length>0){
                //先判断是否存在，如果存在将count加1
                let { id } = action.value;
                let res =_.find(new_state.cart,function(item){
                    return item.id==id;
                })
                if(res){
                    new_state.cart.forEach(item=>{
                        if(item.id==res.id){
                            item.count++
                        }
                    })
                }else{
                    new_state.cart.push(action.value); 
                }
            }else{
                new_state.cart.push(action.value);
            }
            break;
        default : return prevState
    }
    return new_state
}
export default cart