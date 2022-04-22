const fs = require('fs');
// fs.writeFileSync('read.txt','welcome alam')
// fs.writeFileSync('read.txt','welcome jamal')
// fs.appendFileSync('read.txt',' append line')
// const data=fs.readFileSync('read.txt')

// console.log(data.toLocaleString());
// fs.renameSync('read.txt','newRename.txt')

// fs.mkdirSync('Alam')
// fs.writeFileSync('Alam/read.txt','hello')
// fs.appendFileSync('Alam/read.txt',' appen txt')
// console.log(fs.readFileSync('Alam/read.txt','utf-8')); 
// fs.rmSync('Alam/read.txt')
// fs.rmdirSync('Alam')

//when we use async fn then we must pass callback
// callback is nothing but a fucntion inside argument

// fs.writeFile('read.txt','hello', (err)=> {
// console.log('files is created');
// })
//in async we have to tell program to excute after
// fs.readFile('read.txt','utf-8',(err, alam)=> {
//     console.log('print after reading ',alam);
// });
// console.log('print before reading');



//Node Module
// const opr = require('./nodeModule')
// console.log(opr);
// console.log(opr.add(3,4));
// console.log(opr.sub(3,4));

//now we can use object destructring
const {add, name, sub} = require('./nodeModule')
console.log(add(3,4));
console.log(name);
console.log("jamal");


