/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-04-16 14:46:30
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-04-16 17:35:13
 */
// 1，引入express
const express = require('express');
const app = express();
const port = 5500;

app.all('/check-username', (req, res) => {
  // 设置响应头
  // res.setHeader('Access-Control-Allow-Origin', '*');
  const data = {
    exist: 1,
    msg: '用户名已存在',
  };
  // 数据转为json字符串
  let str = JSON.stringify(data);

  res.send(`handle(${str})`);
});

app.all('/cors-server', (req, res) => {
  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  const data = {
    exist: 1,
  };
  // 数据转为json字符串
  let str = JSON.stringify(data);

  res.send(`handle(${str})`);
});

app.listen(port, () => {
  console.log(`服务已经启动，http://localhost:${port}`);
});
