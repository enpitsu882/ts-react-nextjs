"use strict";
function sayHello(firstName) {
    console.log('Hello ' + firstName);
}
let firstName = 'Takuya';
sayHello(firstName);
// 配列
const mixedArray = ['foo', 1];
const mixedArrayU = ['foo', 1]; // Union型
const mixedArrayT = ['foo', 1]; // タプル
// オブジェクト型
const user = {
    name: 'Takuya',
    age: 36
};
function printName(obj) {
    console.log(obj);
}
printName({ firstName: 'Takuya' });
printName({ firstName: 'Takuya', lastName: 'Tejima' });
