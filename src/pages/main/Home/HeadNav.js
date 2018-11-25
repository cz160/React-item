import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {HeadNavContent} from './stylecomponents'
import HomeContent from './HomeContent'
import QuickContent from './QuickContent'
function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
  const tabs = [
    { title: '首页'},
    { title: '极速免税店' },
    { title: '母婴' },
    { title: '轻奢' },
    { title: '名品特卖' },
  ];
  const HeadNav = () => (
    <div>
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={tabs} //tab数据
          tabBarTextStyle={{'fontSize':'14px','color': '#666'}} //文字默认样式
          tabBarActiveTextColor="#fe4070"  //文字选中样式
          tabBarUnderlineStyle={{ 'borderColor':"#fe4070"}}  //下划线样式
          renderTabBar={renderTabBar}
        >
          <HeadNavContent>
            <HomeContent />
          </HeadNavContent>
          <HeadNavContent>
            <QuickContent />
          </HeadNavContent>
          <HeadNavContent>
            <HomeContent />
          </HeadNavContent>
          <HeadNavContent>
            <HomeContent />
          </HeadNavContent>
          <HeadNavContent>
           <HomeContent />
          </HeadNavContent>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  );
export default HeadNav;


