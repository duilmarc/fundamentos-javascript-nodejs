/*const fruits=['apple', 'melon', 'lemon'];

for(let i = 0 ; i < fruits.length ; i++){
    console.log(fruits[i]);
}

for( const fruit of fruits){
    console.log(fruit);
}
*/
const personas=[ {name : "Franco"}, {name: "Rodrigo"}];

for( const persona in personas){
    console.log(personas[persona].name); 
}
let iterator = 0 ;

// Ejecuta al menos una vez do - while 
do{
    console.log(personas[iterator]);
    iterator++;
}while( iterator < personas.length)



while(iterator < personas.length){
    console.log(personas[iterator]);
    iterator++;
}