import { ProxyState } from "../AppState.js"
import { SandBoxPokemon } from "../Models/SandBoxPokemon.js";

const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/seth/pokemon',
    timeout: 12000

})

class SandBoxPokemonService {

    async catchPokemon() {
        let pokemon = ProxyState.activePokemon
        const res = await sandboxApi.post('', pokemon)
        console.log('saving pokemon', res.data);
        ProxyState.sandBoxPokemons = [...ProxyState.sandBoxPokemons, new SandBoxPokemon(res.data)]

    }



}

export const sandboxpokemonService = new SandBoxPokemonService()