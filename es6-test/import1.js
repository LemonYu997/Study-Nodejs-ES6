//导入模块
import {name, age, gender, say} from "./export1"

console.log(name, age, gender);

//导入内容均为只读，不可以修改
//name="ReTest";  //会报错

say("hello test");

//可以对导入的变量起别名
import {name as abc, say as hello} from "./export1"

console.log(abc);
hello("hello hello");