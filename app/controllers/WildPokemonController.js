import { Pop } from "../utils/Pop.js"
import { wildPokemonService } from "../services/WildPokemonService.js"
import { AppState } from "../AppState.js"
import { Pokemon } from "../models/PokemonModel.js"
import { setHTML } from "../utils/Writer.js"


function _drawWildPokemonList() {
    let wildPokemon = AppState.wildPokemon
    let content = ''
    wildPokemon.forEach(pokemon => content += Pokemon.wildPokemonTemplate(pokemon))
    setHTML("wild-pokemon", content)
}



export class WildPokemonController {
    constructor() {
        console.log('wild poke controller loaded')
        this.getWildPokemon()
        AppState.on('wildPokemon', _drawWildPokemonList)
    }
    async getWildPokemon() {
        try {
            console.log('getting wild pokemon in the controller')
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
    async setActivePokemon(name) {
        try {
            await wildPokemonService.setActivePokemon(name)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }

    }
}