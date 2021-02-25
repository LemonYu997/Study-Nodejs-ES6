//方式1
/*
export default function (str) {
    console.log(str);
}
*/

//方式2，如果包含很多内容
export default {
    eat(str) {
        console.log("eat " + str);
    },
    drink(str) {
        console.log("drink " + str);
    }
}