function sayHello(firstName: string) {
  console.log('Hello ' + firstName);
}

let firstName: string = 'Takuya';
sayHello(firstName);

// 配列
const mixedArray = ['foo', 1];
const mixedArrayU: (string | number)[] = ['foo', 1]; // Union型
const mixedArrayT: [string, number] = ['foo', 1]; // タプル

// オブジェクト型(プロパティに?を付けると省略可となる)
const user: { name: string; age: number } = {
  name: 'Takuya',
  age: 36
};
function printName(obj: { firstName: string; lastName?: string }) {
  console.log(obj);
}
printName({ firstName: 'Takuya' });
printName({ firstName: 'Takuya', lastName: 'Tejima' });

// 関数
function sayHello2(name: string): string {
  return `Hello ${name}`;
}

// 引数に関数を指定
function printName2(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName));
}
function formatName(name: string): string {
  return `${name} san`;
}
printName2('Takuya', formatName); // Takuya san

// 型エイリアス
type Point = {
  x: number;
  y: number;
};
function printPoint(point: Point) {
  console.log(`x座標は${point.x}です`);
  console.log(`y座標は${point.y}です`);
}
printPoint({ x: 100, y: 100 });

// 型エイリアス（関数）
type Formatter = (a: string) => string;
function printName3(firstName: string, formatter: Formatter) {
  console.log(formatter(firstName));
}

// 型エイリアス（オブジェクト）
type Label = {
  [key: string]: string;
};
const labels: Label = {
  topTitle: 'トップページのタイトルです',
  topSubTitle: 'トップページのサブタイトルです',
  topFeature1: 'トップページの機能1です',
  topFeature2: 'トップページの機能2です'
};

// インターフェース
interface Point2 {
  x: number;
  y: number;
}
interface Point2 {
  z: number; // 後から付け足せる
}
function printPoint2(point: Point2) {
  console.log(`x座標は${point.x}です`);
  console.log(`y座標は${point.y}です`);
  console.log(`z座標は${point.z}です`);
}
printPoint2({ x: 100, y: 100, z: 200 });

// インターフェースの継承
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: '赤',
  radius: 10
};

// クラス
class Point3 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  moveX(n: number): void {
    this.x += n;
  }

  moveY(n: number): void {
    this.y += n;
  }
}
const point = new Point3();
point.moveX(10);
console.log(`${point.x}, ${point.y}`);

// クラスの継承
class Point3D extends Point3 {
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y);
    this.z = z;
  }

  moveZ(n: number): void {
    this.z += n;
  }
}
const point3D = new Point3D();
point3D.moveX(10);
point3D.moveY(20);
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`);

// implementsによる実装の強制
interface IUser {
  // 頭のIはinterfaceであることを示す
  name: string;
  age: number;

  sayHello: () => string;
}
class User implements IUser {
  name: string;
  age: number;

  constructor() {
    this.name = '';
    this.age = 0;
  }

  sayHello(): string {
    // 実装しないとエラーとなる
    return `こんにちは，私は${this.name}，${this.age}歳です．`;
  }
}

// アクセス修飾子
class BasePoint3D {
  public x: number = 0;
  private y: number = 0;
  protected z: number = 0;
}
const basePoint = new BasePoint3D();
basePoint.x; // OK
// basePoint.y; // error
// basePoint.z; // error

// Enum型
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let direction: Direction = Direction.Left;
console.log(direction); // 2

// Enum型（文字列列挙型）
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
const value = 'DOWN';
const enumValue = value as Direction2;
if (enumValue === Direction2.Down) {
  console.log('Down is selected');
}

// ジェネリック型
class Queue<T> {
  private array: T[] = [];

  push(item: T) {
    this.array.push(item);
  }

  pop(): T | undefined {
    return this.array.shift();
  }
}
const queue = new Queue<number>(); // 外部からnumber型を指定
queue.push(112);
queue.push(111);
// queue.push('hoge');
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());

// Union型（型エイリアスどうしを掛け合わせることもできる）
type Identity = {
  id: number | string;
  name: string;
};
type Contact = {
  name: string;
  email: string;
  phone: string;
};
type IdentityOrContact = Identity | Contact;

const id: IdentityOrContact = {
  id: '111',
  name: 'Takuya'
};
const contact: IdentityOrContact = {
  name: 'Takuya',
  email: 'test@exsample.com',
  phone: '012345678'
};

// Intersection型
type Employee = Identity & Contact;
const employee: Employee = {
  // 1つでも欠けるとエラーとなる
  id: '111',
  name: 'Takuya',
  email: 'test@exsample.com',
  phone: '012345678'
};

// リテラル型
let postStatus: 'draft' | 'published' | 'deleted';
postStatus = 'draft'; // OK
// postStatus = 'drafts'; // error
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// never型
function error(message: string): never {
  throw new Error(message);
}
function foo(x: string | number | number[]): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
  // neverを利用することで明示的に値が返らないことをコンパイラに伝えることができる
  // neverを使用しないとコンパイルエラーになる
  return error('Never happens');
}

// 将来的に定数が追加される可能性のあるenum型を定義
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword
}
const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'Setting';
    case PageType.EditProfile:
      return 'Edit Profile';
    case PageType.ChangePassword:
      return 'Change Password';
    default:
      // 決して起きないことをコンパイラに伝えるnever型に代入
      const wrongType: never = type;
      throw new Error(`${wrongType} is not in PageType`);
  }
};

// Optional Chaining
interface User2 {
  name: string;
  social?: {
    facebook: boolean;
    twitter: boolean;
  };
}

let user2: User2;

user2 = { name: 'Takuya', social: { facebook: true, twitter: true } };
console.log(user2.social?.facebook); // true

user2 = { name: 'Takuya' };
console.log(user2.social?.facebook); // undefined

// Non-null Assertion Operator
function processUser(user?: User) {
  // let s = user.name; // オブジェクトは 'undefined' である可能性があります。
  let s = user!.name;
}

// 型ガード
function addOne(value: number | string) {
  if (typeof value === 'string') {
    return Number(value) + 1;
  }
  return value + 1;
}
console.log(10); // 11
console.log('20'); // 21

type User3 = {
  info?: {
    name: string;
    age: number;
  };
};

let response = {};
const user3 = response as any as User3;

if (user3.info) {
  console.log(user3.info.name); // 既にifでinfoがあることは確定しているのでOK
}

// keyofオペレーター
interface User4 {
  name: string;
  age: number;
  email: string;
}
type UserKey = keyof User4; // 'name' | 'age' | 'email' のUnion型になる

const key1: UserKey = 'name';
// const key2: UserKey = 'phone'; // error

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user4: User4 = {
  name: 'Takuya',
  age: 36,
  email: 'test@example.com'
};
const userName = getProperty(user, 'name');
// const userGender = getProperty(user, 'gender'); // error

// インデックス型
type SupportVersions = {
  [env: number]: boolean;
};

let versions: SupportVersions = {
  102: false,
  103: false,
  104: true
  // 'v105': true // error
};

// readonly
type User5 = {
  name: string;
  gender: string;
};
type UserReadonly = Readonly<User5>; // ジェネリック型

let user5: User5 = { name: 'Takuya', gender: 'Male' };
let userReadonly: UserReadonly = { name: 'Takuya', gender: 'Male' };

// unknown型
const x: unknown = 123;
const y: unknown = 'Hello';

// console.log(x.toFixed(1)); // error
if (typeof x === 'number') {
  console.log(x.toFixed(1)); // 型安全な状況下のみでアクセス・実行できる
}
if (typeof y === 'string') {
  console.log(y.toLowerCase());
}

// 型定義ファイルの作成
import { hello } from './lib/hello';
hello('Takuya');

// p.65まで
