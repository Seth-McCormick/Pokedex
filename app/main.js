import { PokesController } from "./Controllers/pokesController.js";
import { SandBoxPokemonsController } from "./Controllers/sandboxpokemonController.js";


class App {
  pokesController = new PokesController()

  sandboxpokemonsController = new SandBoxPokemonsController()
}

window["app"] = new App();
