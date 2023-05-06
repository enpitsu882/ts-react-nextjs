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

// p.44まで