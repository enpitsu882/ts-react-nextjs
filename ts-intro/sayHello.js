"use strict";
var _a, _b;
function sayHello(firstName) {
    console.log('Hello ' + firstName);
}
let firstName = 'Takuya';
sayHello(firstName);
// 配列
const mixedArray = ['foo', 1];
const mixedArrayU = ['foo', 1]; // Union型
const mixedArrayT = ['foo', 1]; // タプル
// オブジェクト型(プロパティに?を付けると省略可となる)
const user = {
    name: 'Takuya',
    age: 36
};
function printName(obj) {
    console.log(obj);
}
printName({ firstName: 'Takuya' });
printName({ firstName: 'Takuya', lastName: 'Tejima' });
// 関数
function sayHello2(name) {
    return `Hello ${name}`;
}
// 引数に関数を指定
function printName2(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return `${name} san`;
}
printName2('Takuya', formatName); // Takuya san
function printPoint(point) {
    console.log(`x座標は${point.x}です`);
    console.log(`y座標は${point.y}です`);
}
printPoint({ x: 100, y: 100 });
function printName3(firstName, formatter) {
    console.log(formatter(firstName));
}
const labels = {
    topTitle: 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能1です',
    topFeature2: 'トップページの機能2です'
};
function printPoint2(point) {
    console.log(`x座標は${point.x}です`);
    console.log(`y座標は${point.y}です`);
    console.log(`z座標は${point.z}です`);
}
printPoint2({ x: 100, y: 100, z: 200 });
const cc = {
    color: '赤',
    radius: 10
};
// クラス
class Point3 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    moveX(n) {
        this.x += n;
    }
    moveY(n) {
        this.y += n;
    }
}
const point = new Point3();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);
// クラスの継承
class Point3D extends Point3 {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
    moveZ(n) {
        this.z += n;
    }
}
const point3D = new Point3D();
point3D.moveX(10);
point3D.moveY(20);
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);
class User {
    constructor() {
        this.name = '';
        this.age = 0;
    }
    sayHello() {
        return `こんにちは，私は${this.name}，${this.age}歳です．`;
    }
}
// アクセス修飾子
class BasePoint3D {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
}
const basePoint = new BasePoint3D();
basePoint.x; // OK
// basePoint.y; // error
// basePoint.z; // error
// Enum型
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let direction = Direction.Left;
console.log(direction); // 2
// Enum型（文字列列挙型）
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
const value = 'DOWN';
const enumValue = value;
if (enumValue === Direction2.Down) {
    console.log('Down is selected');
}
// ジェネリック型
class Queue {
    constructor() {
        this.array = [];
    }
    push(item) {
        this.array.push(item);
    }
    pop() {
        return this.array.shift();
    }
}
const queue = new Queue(); // 外部からnumber型を指定
queue.push(112);
queue.push(111);
// queue.push('hoge');
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
const id = {
    id: '111',
    name: 'Takuya'
};
const contact = {
    name: 'Takuya',
    email: 'test@exsample.com',
    phone: '012345678'
};
const employee = {
    id: '111',
    name: 'Takuya',
    email: 'test@exsample.com',
    phone: '012345678'
};
// リテラル型
let postStatus;
postStatus = 'draft'; // OK
// postStatus = 'drafts'; // error
function compare(a, b) {
    return a === b ? 0 : (a > b ? 1 : -1);
}
// never型
function error(message) {
    throw new Error(message);
}
function foo(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    // neverを利用することで明示的に値が返らないことをコンパイラに伝えることができる
    // neverを使用しないとコンパイルエラーになる
    return error('Never happens');
}
// 将来的に定数が追加される可能性のあるenum型を定義
var PageType;
(function (PageType) {
    PageType[PageType["ViewProfile"] = 0] = "ViewProfile";
    PageType[PageType["EditProfile"] = 1] = "EditProfile";
    PageType[PageType["ChangePassword"] = 2] = "ChangePassword";
})(PageType || (PageType = {}));
const getTitleText = (type) => {
    switch (type) {
        case PageType.ViewProfile:
            return 'Setting';
        case PageType.EditProfile:
            return 'Edit Profile';
        case PageType.ChangePassword:
            return 'Change Password';
        default:
            // 決して起きないことをコンパイラに伝えるnever型に代入
            const wrongType = type;
            throw new Error(`${wrongType} is not in PageType`);
    }
};
let user2;
user2 = { name: 'Takuya', social: { facebook: true, twitter: true } };
console.log((_a = user2.social) === null || _a === void 0 ? void 0 : _a.facebook);
user2 = { name: 'Takuya' };
console.log((_b = user2.social) === null || _b === void 0 ? void 0 : _b.facebook);
