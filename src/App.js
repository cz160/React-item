import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MainContainer from '@P/main/MainContainer'
import DeteilWrap from '@P/detail'
import List from '@P/list'
import Test from '@P/bug'
document.cookie="default_site_25=bj";
document.cookie="first_visit=1";
document.cookie="first_visit_time=1541337954";
document.cookie="guide_download_show=1";
document.cookie="has_download=1";
document.cookie="from_source=browser";
document.cookie="referer_site_cps=baidusempp000009";
document.cookie="sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22166dee6b791b9-0b01e368fcdded-2d604637-250125-166dee6b7922c0%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%7D";
document.cookie="PHPSESSID=0c5531d2a4fc86a1df739f3d71df0f3e";
document.cookie="_adwp=265569940.9159389825.1541337946.1541337946.1541420427.2";
document.cookie="_adwr=265569940%23https%253A%252F%252Fwww.baidu.com%252Flink%253Furl%253DDbhPnDNHhB3ciwIPEn1jyyyR0Br8PvwFXW7fm8oVU-_%2526wd%253D%2526eqid%253D8eddae5f00001f29000000025be03582";
document.cookie="__utma=1.653979078.1541337947.1541337947.1541420427.2";
document.cookie="__utmz=1.1541420427.2.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic";
document.cookie="__xsptplus428=428.3.1541420427.1541420427.1%232%7Cwww.baidu.com%7C%7C%7C%7C%23%235HnJqKaNNqwJf9022tay08jUrhdgl_7L%23";
document.cookie="Hm_lvt_884477732c15fb2f2416fb892282394b=1541337947;1541339434;1541420428";
document.cookie="referer_site=wap_browser_www.baidu.com; close_down_banner=1541506939946";
document.cookie="client_addr=%E5%8C%97%E4%BA%AC%E5%B8%82-%E5%8C%97%E4%BA%AC%E5%B8%82";
document.cookie="jmdl14=2";
document.cookie="jml14=2";
document.cookie="sid=0c5531d2a4fc86a1df739f3d71df0f3e";
document.cookie="route=25cdabaf22fa7345f80ba1a695a3f319";
document.cookie="TY_SESSION_ID=ec589915-2c5c-4575-bd5f-9fdc45868042";
document.cookie="device_platform=iphone"
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect from='/' to='/main' exact></Redirect>
          <Route path="/deteil" component={DeteilWrap}></Route>
          <Route path="/main" component={MainContainer}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/bug" component={Test}></Route>
        </Switch>  
      </div>

    );
  }
}
export default App;
