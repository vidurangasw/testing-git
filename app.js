const EventEmitter = require('events'); // this is a class
const emitter = new EventEmitter(); // object of a class

const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);

console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log("+++++>>>", totalMemory);

console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function (err, file) {
    if (err) console.log('Error ', err);
    else console.log('Result',files);
});

// register emiter
emitter.on('massageLogger',function(){
    console.log('listener called');
});

// Raise an event
emitter.emit('messageLogged');

console.log("Viduranga")