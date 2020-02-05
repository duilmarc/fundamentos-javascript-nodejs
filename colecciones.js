/* Definiendo arrays */

const fruits =  [
    "apple" , 
    "melon", 
    "mango",
    function() {
        console.log("Hola");
        return 1;
    }

];


console.log(fruits[3]());

/* Definiendo Sets */

const numbers = new Set();
numbers.add(5);
numbers.add(5);
numbers.add(6);

console.log(numbers.values());

/* Definiendo diccionarios */

const students = new Map();
students.set("one", "Franco");

console.log(students.get("one"));