import { orderdata } from './data.js'
import data from './data/pokemon/pokemon.js';

//funcion visualizar data en navegador//
let pokemon = Object.values(data.pokemon);

function visualizardata() {
    for (let i = 0; i < pokemon.length; i++) {
        let namepokemon = pokemon[i].name;
        let imagenpokemon = pokemon[i].img;
        let contenedor = document.querySelector(".contenedor")
        let infopokemon = document.createElement("div");
        contenedor.appendChild(infopokemon)
        infopokemon.className = "contenedorpokemon"
        infopokemon.innerHTML =
            `
        <div class= "contenedorimagen"> 
        <img class="imagen" src = "${imagenpokemon}">
        </div>
        <div class= "names"
        <"${namepokemon}">
        <p> ${namepokemon}</p>
        </div>
        `
    }
}
//Funcion Ordenar AZ-ZA//
function OrderNamesPokemon() {
    let OrderNames = document.getElementById("orderPokemon");
    OrderNames.addEventListener("change", () => {
        const dataorganizada = orderdata(data.pokemon)
        console.log(dataorganizada)
        visualizardata(data, dataorganizada);
    });
}
//console.log ( pokemon.data)
console.log(orderdata(data.pokemon))
window.addEventListener("load", visualizardata(pokemon))
OrderNamesPokemon()

//ESTO ES UN OBJETO  const data = {
//     pokemon:{
//         nombre:pikachu,
//         edad:"3 años"
//     },

// }

// function suma(a,b) {
//     return a+b
// }
//suma(3,4)

//[ ]gfgfd
