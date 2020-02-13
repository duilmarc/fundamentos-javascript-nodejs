function saludar(nombre) {
    console.log("Hola mundo " + nombre);
}

function greet(nombre) {
    console.log("Hola mundo");
}

saludar('Franco');    

// funcion que no tiene alguna funcion de retorno
console.log(saludar('Franco'));

function logGreeting(fn) {
    fn();
}

const greetMe = function(name){
    console.log(`Hola ${name}`);
}    

//Funcion de flecha
const greetMe1 =(name) => console.log(`Hola ${name}`);

greetMe('Juan');
greetMe1('Juan');

logGreeting(greet);