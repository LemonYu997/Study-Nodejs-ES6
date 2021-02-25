//入口文件，引入js并应用
var bar = require("./bar");
var logic = require("./logic");
//引入css文件
require("./css/css1.css");

bar.info("100 + 200 = " + logic.add(100, 200));