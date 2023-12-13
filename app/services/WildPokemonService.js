import { pokeApi } from "./AxiosService.js"


class WildPokemonService {
    async getWildPokemon() {
        const response = await pokeApi.get('pokemon')
        console.log('Catching wild pokemon', response.data)
    }
}

const wildPokemonService = new WildPokemonService()