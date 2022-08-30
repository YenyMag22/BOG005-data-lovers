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
export const FilterDataWater = (typesfilter, data) => {
  const filterdata = data.filter(function(dataPokemon) {
    // return dataPokemon.type == "water"
    return (dataPokemon.type).includes(typesfilter) 
  })
  console.log(filterdata)
  return filterdata;
}

  









