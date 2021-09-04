const { response } = require("express")
const movies = require("../models/filmes.json") 

//definindo rota padrão
const home = (request, response) => {
    response.status(200).send({
        "message": "Olá, seja bem vindo(a) ao reprogramaflix!"
    })
}

const getAll = (request, response) => {
    response.status(200).send(movies);
}

const getById = (request, response) => {
    const requestedId = request.params.id
    const filteredId = movies.find(movie => movie.id == requestedId)
    response.status(200).send(filteredId)
}

const getByTitle = (response, request) => { 
    const requestedTitle = request.query.title.toLowercase()
    const filteredTitle = movies.find(movie => movie.title.toLowercase().includes(requestedTitle))
    response.status(200).send(filteredTitle)

    if (filteredTitle === "" || filteredTitle === undefined){
        response.status(404).send({
            "message": "Insira um texto válido!"
        })
    } else {
        response.status(200).send(filteredTitle)
    }
}



module.exports = { 
    home, 
    getAll, 
    getById,
    getByTitle
} 