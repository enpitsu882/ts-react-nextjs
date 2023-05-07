function sayHello (firstName: string) {
  console.log('Hello ' + firstName);
}

let firstName: string = 'Takuya';
sayHello(firstName);

// 配列
const mixedArray = ['foo', 1];
const mixedArrayU: (string|number)[] = ['foo', 1]; // Union型
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
  return `Hello ${name}`
}

// 引数に関数を指定
function printName2(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName));
}
function formatName(name: string): string {
  return `${name} san`;
}
printName2('Takuya', formatName) // Takuya san

// 型エイリアス
type Point = {
  x: number;
  y: number;
}
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
}
const labels: Label = {
  topTitle: 'トップページのタイトルです',
  topSubTitle: 'トップページのサブタイトルです',
  topFeature1: 'トップページの機能1です',
  topFeature2: 'トップページの機能2です'
}

// p.49まで