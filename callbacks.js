// ejecuta luego del tiempo que carga 2000 = 2 segundos

setTimeout(() => {
    console.log("hello world")
}, 2000); 


// otro ejemplo de callback

function calculate( n1 , n2, operation) {
    return operation(n1, n2)
}

function add(n1,n2) {
    return n1 + n2;
}

const result = calculate(1, 8, add);
console.log(result);