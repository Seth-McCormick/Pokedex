export class SandBoxPokemon {
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

}