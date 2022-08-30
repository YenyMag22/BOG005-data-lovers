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

//Pokemon mas grande

pokemon.pokemon.sort((pokea, pokeb) => {
  if (pokea.size.height < pokeb.size.height) {
    return 1;
  }
  return -1;

})

export const pokemonBig = pokemon.pokemon[0];
console.log(pokemonBig);
