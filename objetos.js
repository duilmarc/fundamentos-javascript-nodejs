/* declarando un json */

const person = {
    name: 'Franco',
    lastname: 'Chavez',
    isStudent: true,
    getFullName(){
        return this.name + " " + this.lastname;
    }

};


// Imprimiendo funcion dentro del JSON 
console.log(person.getFullName());


/* Implementado una clase en javascript*/

class Person{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

const persona = new Person("Franco");
let name = persona.getName();

console.log(name);
