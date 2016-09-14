var express = require('express');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.use(express.static(__dirname+'/',{redirect:false}));
app.listen(port,function(){
	console.log("Server Started, Port : "+port);
});
