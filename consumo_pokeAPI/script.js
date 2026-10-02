async function carregarPokemon() {
    const mensagem = document.querySelector("#mensagem")
    mensagem.textContent = "Carregando Pokemon..."

    for (let i = 1; i < 1000; i++) {
        const item = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        const pokemon = await item.json()

        console.log(pokemon)

        const title = document.createElement("h2");
        title.textContent = pokemon.name.toUpperCase()

        const img = document.createElement("img")
        img.src = pokemon.sprites["front_default"]

        const section = document.querySelector("#listaPokemon")

        const div = document.createElement("div")

        const tipos = document.createElement("p")
        let str_tipos = ""

        for (let j = 0; j < pokemon.types.length; j++) str_tipos += pokemon.types[j].type.name + "  ";

        tipos.textContent = str_tipos

        console.log(str_tipos)

        div.style = "display: flex; aling-itens: center; flex-direction: column"

        img.style = "width: 200px"

        div.appendChild(title);
        div.appendChild(tipos)
        div.appendChild(img);
        section.appendChild(div);
        
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }


    mensagem.textContent = "Pokemon buscados!"
}