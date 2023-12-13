
export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
    }
    static wildPokemonTemplate(pokeguy) {
        return `<div class = "container-fluid">
        <section class ="row">
        <span role='button' onclick='app.WildPokemonController.setActivePokemon("${pokeguy.name}")'> ${pokeguy.name} </span>
        </section>
        </div>`
    }
}
