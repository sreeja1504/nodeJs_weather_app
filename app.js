const { setTimeout } = require("timers");
const { setFlagsFromString } = require("v8");

console.log('starting');
setTimeout(() => {
    console.log('2 secs timer');
}, 2000);

setTimeout(()=>{
    console.log('0 secs timer');
},0);

console.log('stopping');
//output:
// starting 
// stopping
// 0 secs 
// 2secs