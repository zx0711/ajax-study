/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-04-13 17:27:49
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-04-16 14:51:45
 */
// 1，引入express
const express = require('express');
const app = express();
const port = 5501;

//可以接收任意类型的请求
app.all('/json-server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 加特殊的响应头
  // res.setHeader('Access-Control-Allow-Headers', '*');
  // 设置响应体
  const data = {
    name: 'atguigu',
  };
  const str = JSON.stringify(data);
  res.send(str);
});

app.get('/delay', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');

  setTimeout(() => {
    res.send('请求超时+网络异常');
  }, 3000);
});

app.get('/cancel-ajax', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('取消ajax请求');
});

app.all('/axios-server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('axios发送的ajax请求');
});

app.listen(port, () => {
  console.log(`服务已经启动，http://localhost:${port}`);
});
