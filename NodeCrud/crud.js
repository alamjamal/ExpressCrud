const fs = require('fs');
// fs.mkdir('alam', (err)=>{
// 	console.log('folder created');
// })

// fs.writeFile('./alam/bio.txt','my name is alam', (err)=>{
// 	console.log('files created')
// });

// fs.appendFile('./alam/bio.txt', 'hello ', (err)=>{
// 	console.log('append data');
// })

// fs.readFile('./alam/bio.txt','utf-8',(err, data)=>{
// 	console.log(data);
// })

// fs.rename('./alam/bio.txt', './alam/hello.txt',(err)=>
// {
// 	console.log("renamed");
// })

// fs.unlink('./alam/hello.txt', (err)=>{
// 	console.log("deleted");
// })

fs.rmdir('./alam/sfd' ,err=>{
	console.log(err);
});