const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('返回疫情当前数据的api服务器');
})

app.get('/api/newsdata',(req,res)=>{
  //解决ajax跨域问题
  //res.append()
  res.json({name:'shen'});
})

app.listen(8080,()=>{
  console.log('server start');
  
})