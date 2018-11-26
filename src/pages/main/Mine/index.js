import React, { Component } from 'react';
import HeadCommon from '@C/common/Head'
class Mine extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'我的聚美'
    }
  }
  render() {
    return (
      <HeadCommon title={this.state.title}/>
    );
  }
}
export default Mine