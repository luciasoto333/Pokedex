

fetch('https://pokeapi.co/api/v2/pokemon/8/')
.then(response => response.json())
.then(pokemon2 => {
//   let element2 = document.getElementById('elemento2')
//   element2.innerHTML = `<p>${pokemon2.name}<p>
//   <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p>`;
//   console.log(pokemon2)
showPokemon(pokemon2);
})
.catch(err=>console.log(err))


function showPokemon(pokemon){
    console.log(pokemon);
}