import React, { Component,Fragment } from 'react';
import * as Styles from './stylecomponents'
//搜索框组件
class Search extends Component {
  render() {
    return (
      <Fragment>
          <Styles.SearchWrap>
            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" />
            <span>搜索商品 分类 功效</span>
          </Styles.SearchWrap>
          <Styles.SearchBtn>
              <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" />
          </Styles.SearchBtn>
      </Fragment>
      
    );
  }
}
export default Search