
export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName || ""
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.url = data.url
        this.sprite = data.sprite
    }
    static wildPokemonTemplate(pokeguy) {
        return `<div class = "container-fluid">
        <section class ="row">
        <span role='button' onclick='app.WildPokemonController.setActivePokemon("${pokeguy.name}")'> ${pokeguy.name} </span>
        </section>
        </div>`
    }
    get activePokemonTemplate() {
        return `<div class = "col-8 border card rounded bg-info border-dark text-center text-light">
        <span>${this.name}</span>
        <span>${this.height}</span>
        <span>${this.weight}</span>
        </div>
        `
    }
}
