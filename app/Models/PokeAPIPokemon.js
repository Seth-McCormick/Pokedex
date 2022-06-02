export class PokeApiPokemon {
    constructor(pokeData) {
        this.id = pokeData.id
        this.abilities = pokeData.abilities
        this.experience = pokeData.experience
        this.forms = pokeData.forms
        this.indices = pokeData.indices
        this.height = pokeData.height
        this.items = pokeData.items
        this.default = pokeData.default
        this.location = pokeData.location_area_encounters
        this.moves = pokeData.moves
        this.name = pokeData.name
        this.order = pokeData.order
        this.type = pokeData.type
        this.species = pokeData.species
        this.sprites = pokeData.sprites
        this.weight = pokeData.weight

    }

    static ListTemplate(pokemon) {
        return `<b class="selectable" onclick="app.pokesController.getPokemonDetails('${pokemon.url}')"> ${pokemon.name} </b>`

    }


    get DetailsTemplate() {
        return ` 
        <div class="col-12 d-flex text-center justify-content-between p-3">
        <h4>${this.name}</h4>
        <button class="btn btn-success" onclick="app.sandboxpokemonsController.catchPokemon()"> Catch Pokemon</button>
        </div>
        <div class="col-12 ">
          <h6>Weight: ${this.weight}</h6>
        </div>
        <div id="spell-body" class="col-12 text-center">
        
        <p>${this.location}</p>
    
        </div>
         `

    }

    get SandBoxTemplate() {
        return `
        <div class="col-12">
        <div class="row">
          <div class="col selectable" onclick="app.sandboxpokemonController.('${this.id}')">${this.name}</div>
        </div>
      </div>
        `
    }
}