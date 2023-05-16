"use strict";
function printResult(num) {
    console.log('result：' + num);
}
function add(n1, n2) {
    return n1 + n2;
}
// console.log(printResult(add(5,12)))
// let combineValues:Function;//これだと、どんな関数も指定できる。
// let combineValues;
// let combineValues = add; //こう書いたら、add関数のみになってしまう。
let combineValues; //最終こう書けば、型の指定ができる！
combineValues = add;
console.log(combineValues(5, 8));
//コールバック関数の指定の仕方
function addAndCB(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
//実際の利用
addAndCB(10, 20, (temp) => {
    console.log(temp);
    return temp; //ここ、cbでvoidを返却値にしているので、返しても返さなくてもok.
});
//# sourceMappingURL=functions.js.map