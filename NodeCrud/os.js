const os=require('os');
console.log(os.freemem());
console.log(os.totalmem()/1024);

const path=require('path');
console.log(path.extname('C:/Users/Alam Jamal/MyNode/os.js'));
console.log(os.arch());
console.log(path.basename('C:/Users/Alam Jamal/MyNode/os.js'));

console.log(path.parse('C:/Users/Alam Jamal/MyNode/os.js'));

const mypath=path.parse('C:/Users/Alam Jamal/MyNode/os.js');
console.log(mypath.base);
console.log("alam");