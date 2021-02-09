const express = require('express');
const axios = require('axios');
const app = express();

app.get('/',(req,res)=>{
  res.send('返回疫情当前数据的api服务器');
})

app.get('/api/newsdata',async (req,res)=>{
  //解决ajax跨域问题
  res.append('access-Control-Allow-Origin','*');
  res.append('access-Control-Allow-content-type','*');
  let resUlt = await axios.get('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=provinceCompare');
  let data = resUlt.data;
  console.log(JSON.stringify(data));
  res.send(data);
})

app.get('/api/daysdata',async (req,res)=>{
    //解决ajax跨域问题
    res.append('access-Control-Allow-Origin','*');
    res.append('access-Control-Allow-content-type','*');
    let resUlt = await axios.get('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList');
    let data = resUlt.data;
    console.log(JSON.stringify(data));
    res.send(data);
  })

app.listen(8080,()=>{
  console.log('server start');
})