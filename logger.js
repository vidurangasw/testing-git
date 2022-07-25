const EventEmitter = require('events');

var url='http://mylogger.io/log';

class Logger extends EventEmitter{
    log(massage){
        // send an HTTP request
        console.log(massage);
    
        // raise an event
        this.emit('messageLogged', {id: 1,url: 'http://' });
    }
}

module.exports = Logger;