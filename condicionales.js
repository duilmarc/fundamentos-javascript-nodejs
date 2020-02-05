const calificacion = 80;
const operation = 'gasa';

let n1 = 80;
let n2 = 60;

switch(operation){
    case 'add':
        console.log(n1+n2);
        break;
    case 'subs':
        console.log(n1-n2);
        break;
    default:
        console.log("Operacion no válida");

}