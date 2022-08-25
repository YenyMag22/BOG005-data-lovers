// estas funciones son de ejemplo
//funcion ( export )
export const orderdata = (data) => {
  //return 'data';
  //funcion ordenar nombres de la  data alfabeticamente
  let copydata=[...data]
  copydata.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
  return copydata
};

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
//Data. nombre(funcion pura)