// 引用 uniq 方法 引入
const uniq =require('./1.js')

// var result = uniq([1,1,'1','1'])
// console.log(result);
console.log(uniq([1,2,1,"1"]));
console.log(uniq([1,1,"1",2],true));