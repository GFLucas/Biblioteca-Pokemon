const { listarPokemons, detalharPokemon } = require('utils-playground')

const pokemons = async (req, res) => {
    const { pagina } = req.query;
    try {
        const listaPokemon = await listarPokemons(pagina ?? 1);

        return res.json(listaPokemon)
    }
    catch (erro) {
        return res.json(`Deu erro: ${erro.mensage}`)
    }
};

const pokemon = async (req, res) => {
    const { idOuNome } = req.params;

    try {
        const pokemonProcurado = await detalharPokemon(idOuNome);

        const { id, name, height, weight, base_experience, forms, abilities, species } = pokemonProcurado

        return res.json({ id, name, height, weight, base_experience, forms, abilities, species })
    }
    catch (erro) {
        return res.json(`Deu erro: ${erro.mensage}`)
    }
}


module.exports = {
    pokemons,
    pokemon
}