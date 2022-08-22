// estas funciones son de ejemplo
//funcion ( export )
export const words = (data) => {
  //return 'data';
  //funcion ordenar nombres de la  data alfabeticamente
  let order = data.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
  return order

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