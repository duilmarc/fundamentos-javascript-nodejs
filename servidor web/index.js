const express = require('express');
const server = express();

const fs   = require('fs');
// DEFINING THE ROUTES 
const home  = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

server.get( '/' , getHomePage);

server.get("/about", (req,res) => {
    res.write(about);
})

server.listen(8080,() => {
    console.log("Serves is up on port: "+ 8080);
});

function getHomePage(req, res){
    return res.write(home);
}

// HTTP methods

// GET    -> Lectura
// POST   -> Crear un nuevo recurso
// PUT    -> Reemplaza un recurso existe
// PATCH  -> Actulizar una propiedad de un recurso
// DELETE -> Remover un recurso