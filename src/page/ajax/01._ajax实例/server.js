/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-04-13 17:27:49
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-04-14 17:39:05
 */
// 1，引入express
const express = require('express');
const app = express();
const port = 5500;

//可以接收任意类型的请求
app.all('/server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 加特殊的响应头
  // res.setHeader('Access-Control-Allow-Headers', '*');
  // 设置响应体
  res.send('Hello zx!');
});

app.listen(port, () => {
  console.log(`服务已经启动，http://localhost:${port}`);
});
