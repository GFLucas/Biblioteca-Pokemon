const express = require('express');
const { pokemon, pokemons } = require('./controladores/pokemon');

const rotas = express()

rotas.get('/pokemon', pokemons)
rotas.get('/pokemon/:idOuNome', pokemon)


module.exports = rotas