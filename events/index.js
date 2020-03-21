// Emitor de Eventos de Node js
const { EventEmitter} = require("events");

// Buena practica encapsular con un nombre generico
// Encapsulado en el archivo events-name.js
const { SAVE } = require("./events-name.js")


const emitter = new EventEmitter();

emitter.on( SAVE , () => {
    console.log("On save activated 1");
});

emitter.on( SAVE, () => {
    console.log("On save activated 2");
});


emitter.emit('save');