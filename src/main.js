import { orderdataAZ, orderdataZA } from './data.js'
import data from './data/pokemon/pokemon.js';

//Nuevo 26-08 Mostrar pantalla de inicio

const buttonNavigation = document.getElementById("pantalla1")

buttonNavigation.addEventListener("click", () => {
    const pag1 = document.getElementById("Pag1")
    const pag2 = document.getElementById("Pag2")
    pag1.style.display = "none";
    pag2.style.display = "block";

})

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



