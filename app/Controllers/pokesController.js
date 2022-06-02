import { pokesService } from "../Services/pokesService.js"
import { Pop } from "../Utils/Pop.js"
import { ProxyState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/PokeAPIPokemon.js"

function _draw() {
    let pokemon = ProxyState.pokeApiPokemons
    let template = ''
    pokemon.forEach(p => template += PokeApiPokemon.ListTemplate(p))
    document.getElementById('poke-pokemon').innerHTML = template


}

function _drawPokemonDetails() {
    let pokemon = ProxyState.activePokemon
    document.getElementById('pokemon-details').innerHTML = pokemon.DetailsTemplate

}

export class PokesController {
    constructor() {
        ProxyState.on('pokeApiPokemons', _draw)
        ProxyState.on('activePokemon', _drawPokemonDetails)
        this.getPokePokemon()
        _draw()
    }

    async getPokePokemon() {
        try {
            await pokesService.getPokePokemon()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }


    }
    async getPokemonDetails(url) {
        try {
            await pokesService.getPokemonDetails(url)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }

    }



}