import React, { Component,Fragment} from 'react';
import Search from './Search'
import HeadNav from './HeadNav'
import * as Styles from './stylecomponents'
class Home extends Component {
  render() {
    return (
      <Fragment>
          <Styles.HomeHead>
            <Search />
          </Styles.HomeHead>
          <HeadNav />
      </Fragment>
      
    );
  }
}
export default Home