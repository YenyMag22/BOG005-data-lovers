import { orderdataAZ, orderdataZA } from './data.js'
import data from './data/pokemon/pokemon.js';

//funcion visualizar data en navegador//
let pokemon = Object.values(data.pokemon);


function visualizardata(pokemon) {

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

    OrderNamesPokemon()

}
//Funcion Ordenar data AZ-ZA//
function OrderNamesPokemon() {
    let OrderNames = document.getElementById("orderPokemon");
    OrderNames.addEventListener("change", () => {
        console.log(OrderNames.value);
        let dataorganizada
        let OrderValue = OrderNames.value
        if (OrderValue == "NamesAZ") {
            dataorganizada = orderdataAZ(data.pokemon);
        } else if (OrderValue == "NamesZA") {
            dataorganizada = orderdataZA(data.pokemon);
        } else {
            dataorganizada = data.pokemon
        }
        // console.log(dataorganizada)
        let contenedor = document.querySelector(".contenedor");
        contenedor.innerHTML = ""
        visualizardata(dataorganizada);
    });
}
//funcion Filtrar//

//console.log ( pokemon.data)
// console.log(orderdata(data.pokemon))
window.addEventListener("load", visualizardata(pokemon))



function OrderAZNames() {

}
let OrderNamesAZ = document.getElementById("Order NamesAZ");
OrderNamesAZ.addEventListener("click", OrderAZNames);
//let OrderNamesZA = document.getElementById("Order NamesZA");
//OrderNamesAZ.addEventListener("click", OrderAZNames);
