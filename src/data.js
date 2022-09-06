import pokemon from "./data/pokemon/pokemon.js";

export const orderdataAZ = (data) => {

  let copydata = [...data]
  copydata.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 1;

    }

  });
  return copydata
};
//funcion ordenar data alfabeticamente de manera descendente
export const orderdataZA = (data) => {
  let copydata = [...data]
  copydata.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name > b.name) {
      return -1;
    } else {
      return 1;

    }

  });
  return copydata
};
//funcion Filtrar data//
export const filterData = (typesfilter, data) => {
  const filterData = data.filter(function (dataPokemon) {
    // return dataPokemon.type == "water"
    return (dataPokemon.type).includes(typesfilter)
  })
  //console.log(filterdata)
  return filterData;
}

//Pokemon mas grande

export function calculatorPoke(pokemones) {
  const pokecopy = [...pokemones]
  pokecopy.sort((pokea, pokeb) => {
    if (pokea.size.height < pokeb.size.height) {
      return 1;
    }
    return -1;

  })
  //console.log(pokecopy[0]);
  
  return pokecopy[0];
  
}
export const pokemonBig = calculatorPoke(pokemon.pokemon)
// console.log(pokemonBig);
