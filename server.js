var express = require('express');
var app = express();
const PORT = 3000;

//we can now serve up static pages
app.use(express.static(__dirname));

//app.listen(3000);

app.listen(PORT,()=>{
  console.log(`App is runnin on port ${PORT}`);

});
