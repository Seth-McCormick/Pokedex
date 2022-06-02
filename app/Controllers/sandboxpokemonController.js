import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";



function _drawSandBoxPokemon() {
    let pokemon = ProxyState.sandBoxPokemons
    let template = ''
    pokemon.forEach(p => template += p.SandBoxTemplate)
    document.getElementById('pokemon-caught').innerHTML = template


}

export class SandBoxPokemonsController {
    constructor() {
        console.log('sandbox controller loaded');
        ProxyState.on('sandBoxPokemons', _drawSandBoxPokemon)

    }
    async catchPokemon() {
        try {
            console.log('catching');
            await sandboxpokemonService.catchPokemon()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

}