export const orderdataAZ = (data) => {

  let copydata=[...data]
  copydata.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name < b.name) {
      return -1;
    }else {
      return 1;
      
    }

  });
  return copydata
};
//funcion ordenar data alfabeticamente de manera descendente
export const orderdataZA = (data) => {
  let copydata=[...data]
  copydata.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    } else if (a.name > b.name) { 
      return -1;
    }else {
      return 1;
      
    }

  });
  return copydata
};
//funcion Filtrar data
export const filterdata =(data, parameter) => {
  let filterpokemon;
  switch (parameter) {
    case value:
      
      break;
  
    default:
      break;
  }

}

//funcion filtar


export let filterTypePokemon = function (typeElement) {
  let elements = dataPokemon.pokemon.filter((pokemon) => {
    return pokemon.type.indexOf(typeElement) != -1;
  });

  if (typeElement === "all") {
    elements = dataPokemon.pokemon
  }


  return elements;
}



