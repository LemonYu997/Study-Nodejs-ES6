//引入路径模块
var path = require("path");

//exports就是module.exports
///但是这里是直接赋值，不能直接使用exports，否则exports就不是module.exports了
module.exports = {
    //入口文件
    entry: "./src/main.js",
    output: {
        //__dirname是node的一个全局变量，获得当前文件所在目录的完整目录名
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    //css打包
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}