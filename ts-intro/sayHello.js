var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(firstName) {
    console.log('Hello ' + firstName);
}
var firstName = 'Takuya';
sayHello(firstName);
// 配列
var mixedArray = ['foo', 1];
var mixedArrayU = ['foo', 1]; // Union型
var mixedArrayT = ['foo', 1]; // タプル
// オブジェクト型(プロパティに?を付けると省略可となる)
var user = {
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
    return "Hello ".concat(name);
}
// 引数に関数を指定
function printName2(firstName, formatter) {
    console.log(formatter(firstName));
}
function formatName(name) {
    return "".concat(name, " san");
}
printName2('Takuya', formatName); // Takuya san
function printPoint(point) {
    console.log("x\u5EA7\u6A19\u306F".concat(point.x, "\u3067\u3059"));
    console.log("y\u5EA7\u6A19\u306F".concat(point.y, "\u3067\u3059"));
}
printPoint({ x: 100, y: 100 });
function printName3(firstName, formatter) {
    console.log(formatter(firstName));
}
var labels = {
    topTitle: 'トップページのタイトルです',
    topSubTitle: 'トップページのサブタイトルです',
    topFeature1: 'トップページの機能1です',
    topFeature2: 'トップページの機能2です'
};
function printPoint2(point) {
    console.log("x\u5EA7\u6A19\u306F".concat(point.x, "\u3067\u3059"));
    console.log("y\u5EA7\u6A19\u306F".concat(point.y, "\u3067\u3059"));
    console.log("z\u5EA7\u6A19\u306F".concat(point.z, "\u3067\u3059"));
}
printPoint2({ x: 100, y: 100, z: 200 });
var cc = {
    color: '赤',
    radius: 10
};
// クラス
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point3.prototype.moveX = function (n) {
        this.x += n;
    };
    Point3.prototype.moveY = function (n) {
        this.y += n;
    };
    return Point3;
}());
var point = new Point3();
point.moveX(10);
console.log("".concat(point.x, ", ").concat(point.y));
// クラスの継承
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.moveZ = function (n) {
        this.z += n;
    };
    return Point3D;
}(Point3));
var point3D = new Point3D();
point3D.moveX(10);
point3D.moveY(20);
console.log("".concat(point3D.x, ", ").concat(point3D.y, ", ").concat(point3D.z));
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
    }
    User.prototype.sayHello = function () {
        return "\u3053\u3093\u306B\u3061\u306F\uFF0C\u79C1\u306F".concat(this.name, "\uFF0C").concat(this.age, "\u6B73\u3067\u3059\uFF0E");
    };
    return User;
}());
// アクセス修飾子
var BasePoint3D = /** @class */ (function () {
    function BasePoint3D() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    return BasePoint3D;
}());
var basePoint = new BasePoint3D();
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
var direction = Direction.Left;
console.log(direction); // 2
// Enum型（文字列列挙型）
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
var value = 'DOWN';
var enumValue = value;
if (enumValue === Direction2.Down) {
    console.log('Down is selected');
}
// ジェネリック型
var Queue = /** @class */ (function () {
    function Queue() {
        this.array = [];
    }
    Queue.prototype.push = function (item) {
        this.array.push(item);
    };
    Queue.prototype.pop = function () {
        return this.array.shift();
    };
    return Queue;
}());
var queue = new Queue(); // 外部からnumber型を指定
queue.push(112);
queue.push(111);
// queue.push('hoge');
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
var id = {
    id: '111',
    name: 'Takuya'
};
var contact = {
    name: 'Takuya',
    email: 'test@exsample.com',
    phone: '012345678'
};
var employee = {
    id: '111',
    name: 'Takuya',
    email: 'test@exsample.com',
    phone: '012345678'
};
// リテラル型
var postStatus;
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
var getTitleText = function (type) {
    switch (type) {
        case PageType.ViewProfile:
            return 'Setting';
        case PageType.EditProfile:
            return 'Edit Profile';
        case PageType.ChangePassword:
            return 'Change Password';
        default:
            // 決して起きないことをコンパイラに伝えるnever型に代入
            var wrongType = type;
            throw new Error("".concat(wrongType, " is not in PageType"));
    }
};
// p.59まで
