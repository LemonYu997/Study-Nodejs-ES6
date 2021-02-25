//方式1
//导出变量
/*
export let name = "test";
export let age = 13;
export let gender = "男";
//导出函数
export let say = function (str) {
    console.log(str);
};
*/

//方式2   更推荐使用
let name = "test";
let age = 13;
let gender = "男";
let say = function (str) {
    console.log(str);
};

export {name, age, gender, say};