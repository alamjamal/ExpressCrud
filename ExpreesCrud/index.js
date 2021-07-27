const startupDebugger=require('debug')('app:startup');
const dbDebugger=require('debug')('app:db');

const express=require('express');
const app=express();

app.use(express.json());//(middleware fn) while request if object is present in req.body then
//it convert json object
app.use(express.urlencoded({extended:true}));
const log=require('morgan');

if(app.get('env')!=='developement'){
    app.use(log('tiny'));
    startupDebugger('margon enabled');
}

const helmet =require ('helmet');
app.use(helmet());

const logger =require('./middleware/logger');
app.use(logger);

dbDebugger("db is started....");


const route=require('./routes/route');
app.use('/course', route);
const home = require('./routes/home');
app.use('/', home);


app.listen(3000,'localhost', ()=>{
    console.log("connection is created");
});

//alam
