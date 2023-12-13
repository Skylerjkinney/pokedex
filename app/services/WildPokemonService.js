import { AppState } from "../AppState.js"
import { Pokemon } from "../models/PokemonModel.js"
import { pokeApi } from "./AxiosService.js"


class WildPokemonService {
    async setActivePokemon(name) {
        let response = await pokeApi.get(`pokemon/${name}`)
        console.log(response)
        let activePokemon = new Pokemon(response.data)
        console.log(activePokemon)
        AppState.activePokemon = activePokemon
    }
    async getWildPokemon() {
        const response = await pokeApi.get('pokemon')
        console.log('Catching wild pokemon', response.data)
        AppState.wildPokemon = response.data.results
    }
}

export const wildPokemonService = new WildPokemonService()