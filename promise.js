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


const booksDB = [
    {
        id: 1,
        title : "Clean Code",
        autorId : 1
    },
    {
        id: 2, 
        title : "The pragmatic programmer",
        autorId : 2
    },
    {
        id: 3,
        title : "Web Development with node.js",
        autorId : 3
    }
];


const authorDb = [
    {
        id : 1, 
        name : "Robert C. Martin"
    },
    {
        id: 2, 
        name: "Steve Forest"
    }
]

function getBookId(id){   
    return new Promise((resolve, reject) => {
        const book = booksDB.find( book => book.id === id);
        if(!book){
            const error= new Error();
            error.message = "Book not found!";
            reject(error);
        }
        resolve(book);
    });

}
function getAuthorById(id){  
    return new Promise((resolve, reject) => {
        const author = authorDb.find( author => author.id === id);
        if(!author){
        const error= new Error();
        error.message = "Author not found!";
        reject(error);
    }
    resolve(author);
    });
}

getBookId(1)
.then(book => {
    return getAuthorById(book.id);
})
.then(author => {
    console.log(author);
})
.catch(error => {
    console.log(error.message);
});