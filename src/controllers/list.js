export async function getPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=12", {
        method:'GET'
    })
        .then(response => response.json())
}

