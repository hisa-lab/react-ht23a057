console.log(typeof 100); 

const arr = [1, 2, 3];
console.log(typeof arr); 

type NumArr = typeof arr;
 // 'number'
 // 'object'

 const val: NumArr = [4, 5, 6];
const val2: NumArr = ['foo', 'bar', 'baz']; // コンパイルエラー