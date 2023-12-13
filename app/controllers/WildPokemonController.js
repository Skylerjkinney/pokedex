import { Pop } from "../utils/Pop.js"





export class WildPokemonController {
    constructor() {

    }
    async getWildPokemon() {
        try {
            await wildPokemonService.getWildPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
}