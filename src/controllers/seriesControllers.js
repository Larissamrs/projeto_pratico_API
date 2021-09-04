const { response } = require("express")
const series = require("../models/series.json")

const home = (request, response) => {
    response.status(200).send({
        "message": "Olá, seja bem vindo(a) ao reprogramaflix!"
    })    
}

const getAll = (request, response) => {
    response.status(200).send(series)
}

const getById = (request, response) => {
    const requestedId = request.params.id
    const filteredId = series.find(serie => serie.id == requestedId)
    response.status(200).send(filteredId)
}

const getByTitle = (request, response) => {
    const requestedTitle = request.query.title
    const filteredTitle = series.find(serie => serie.title == requestedTitle)
    response.status(200).send(filteredTitle)

    if(filteredTitle == "" || filteredTitle == undefined){
        response.status(404).send({
            "message": "Digite um nome de serie valido"
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