import {
    Async_CHANGE_LIST,
    ADD_CART_LIST
} from './action-type'
import axios from 'axios'
const actionCreators = {
    AsyncChange(prams){
        return {
            type:Async_CHANGE_LIST,
            payload:axios({
                    url:`/h5/product/ajaxDynamicDetail?item_id=${prams.id}&type=${prams.type}`
            }).then(res=>{
                return {...res.data.data.result,...prams}
            })
        }
    },
    addCart(data){
        return {
            type:ADD_CART_LIST,
            value:data
        }
    }
}
export default actionCreators