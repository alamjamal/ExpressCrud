const EventEmitter = require("events")
const event = new EventEmitter();


// event.on("sayMyName", ()=>{
//     console.log("my name is alam");
// })
// event.on("sayMyName", ()=>{
//     console.log("my name is jamal");
// })
// event.on("sayMyName", ()=>{
//     console.log("my name is alamjamal");
// })
// event.emit("sayMyName")

//can trigger multiple events with one event

event.on('checkPage', (sc, msg)=>{
    console.log(`status code is ${sc} and code ${msg}`);
})
event.emit('checkPage', 200, 'ok');

//upar hi se call kar skte hain


