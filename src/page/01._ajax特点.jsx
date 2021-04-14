import React, { Component } from 'react';

export default class Ajax01 extends Component {
  /**
   * ajax特点
   * 1，优点：
   * 在页面不刷新的情况下向服务器发请求
   * 允许根据用户的事件来向服务端发送请求，获取结果
   * 2，缺点：
   * 没有浏览历史，不能回退
   * 存在跨域问题
   * SEO不友好（是因为页面内容如果是接口返回过来，那么爬虫就会搜索不到）
   *
   */
  render() {
    return <div>ajax特点</div>;
  }
}
