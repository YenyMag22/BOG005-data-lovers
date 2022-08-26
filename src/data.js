//funcion ( export )
//funcion ordenar data alfabeticamente de manera ascendente
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

// Calcular
// let baseDamage = Object.values(data.pokemon);

// function computeStats(data.pokemon) {
//   for (let i = 0; i < pokemon.length; i++) {
//     let higherDamage = pokemon[i].base-damage>100;
//   }
//   return higherDamage;
//   console.log(higherDamage);
  
// }



// export const anotherExample = () => {
//   return 'OMG';
//  };
