const main = document.querySelector("main")

async function rickymortyApi(numpersonaje) {
    const url = `https://rickandmortyapi.com/api/character/
        ${numpersonaje}`;
    const respuesta = await fetch(url);

    if (!respuesta.ok)
        throw new Error("Error. Pokémon no existe");

    const json = await respuesta.json();

    return [json.name, json.image, json.status]

}

(async function () {
    for (let i = 1; i <= 30; i++) {
        try {
            let listPesonaje = await rickymortyApi(`${i}`);
            main.innerHTML += `
            <div>
                <img src`
        }
    }
})


