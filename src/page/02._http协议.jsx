import React, { Component } from 'react';

export default class Http01 extends Component {
  /**
   * http协议（约定，规则）
   * 定义：超文本传输协议，协议详细规定了浏览器和万维网服务器之间互相通信的规则
   * 这个协议约定的内容：
   *   请求：
   *      发送内容叫请求报文：（重点是格式与参数）
   *         行： 请求类型（get、post之类），url路径，Http(1.1)
   *         头:  Host, Cookie，Content-Type，User-Agent
   *         空行
   *         体：就是请求参数，get请求时为空，post可空可不空
   *   响应：
   *      返回的结果叫响应报文（重点是格式与参数）
   *         行: Http(1.1)，状态码，
   *         头: Content-Type,Content-Length,Content-Encoding
   *         空行:
   *         体: Response
   *
   */
  render() {
    return <div>http协议</div>;
  }
}
