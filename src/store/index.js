//创建store
import {createStore,applyMiddleware} from 'redux'
 //工具
 import {composeWithDevTools} from 'redux-devtools-extension'
 import promiseMiddleware from 'redux-promise-middleware';
 import redux from './reducer'
 const store = createStore(
    redux,
    composeWithDevTools(
        applyMiddleware(promiseMiddleware())
    )
 )
export default store