const express = require('express');
const app = express();
app.use(function(req,res){
  console.log(req.url)
  res.redirect("windowsdefender:"+req.url)
})

app.listen(3000);
