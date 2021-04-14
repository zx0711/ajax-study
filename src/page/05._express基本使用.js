/*
 * @Description:
 * @Author: xiao.zhang
 * @Date: 2021-04-13 17:27:49
 * @LastEditors: xiao.zhang
 * @LastEditTime: 2021-04-13 17:35:54
 */
// 1，引入express
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello zx!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
