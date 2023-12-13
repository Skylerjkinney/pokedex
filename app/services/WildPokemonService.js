import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"


class WildPokemonService {
    async setActivePokemon(name) {
        let response = await pokeApi.get(`pokemon/${name}`)
        console.log(response)
    }
    async getWildPokemon() {
        const response = await pokeApi.get('pokemon')
        console.log('Catching wild pokemon', response.data)
        AppState.wildPokemon = response.data.results
    }
}

export const wildPokemonService = new WildPokemonService()