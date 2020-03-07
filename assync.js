// ejecuta luego del tiempo que carga 2000 = 2 segundos

setTimeout(() => {
    console.log("hello world")
}, 2000); 





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

async function getBookId(id){   
    const book = booksDB.find( book => book.id === id);
    if(!book){
        const error= new Error();
        error.message = "Book not found!";
        throw error;
    }
    return book;
}

async function getAuthorById(id){  
    
    const author = authorDb.find( author => author.id === id);
    if(!author){
        const error= new Error();
        error.message = "Author not found!";
        throw error;
    }
    return author;  
}

async function main(){
    try{
        const book = await getBookId(4);
    const author = await getAuthorById(book.autorId);
    console.log(`This book ${book.title} was writter by ${author.name}`);
    } catch(ex){
        console.log(ex.message);
    }
    
}

main();