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

function getBookId(id, callback){   
    const book = booksDB.find( book => book.id === id);
    if(!book){
        const error= new Error();
        error.message = "Book not found!";
        return callback(error);
    }

    callback(null, book);
}
function getAuthorById(id, callback){   
    const author = authorDb.find( author => author.id === id);
    if(!author){
        const error= new Error();
        error.message = "Author not found!";
        return callback(error);
    }

    callback(null, author);
}

getBookId(1,(err, book) => {
    if(err){
        return console.log(err.message);
    }
    getAuthorById(book.autorId, (err, author) => {
        if(err)
        {
            return console.log(err.message);
        }
        console.log( `This book ${book.title} was written by ${author.name}`);
    });
    return console.log(book); 
})