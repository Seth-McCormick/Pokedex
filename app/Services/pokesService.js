import { ProxyState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeAPIPokemon.js";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 5000

})


class PokesService {
    async getPokePokemon() {
        const res = await pokeApi.get()
        console.log('get pokemon', res.data.results);
        ProxyState.pokeApiPokemons = res.data.results.map(p => p)

    }
    async getPokemonDetails(url) {
        const res = await pokeApi.get(url)
        console.log('get details', res.data);
        ProxyState.activePokemon = new PokeApiPokemon(res.data)


    }


}



export const pokesService = new PokesService()