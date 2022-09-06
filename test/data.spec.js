import { orderdataAZ, orderdataZA } from '../src/data.js';
let dataprueba = [{
  "name": "bulbasaur",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
},
{
  "name": "ivysaur",
  "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
},

{
  "name": "venusaur",
  "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
},

{
  "name": "charmeleon",
  "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
}]
let dataEqual= [{
  "name": "bulbasaur",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
},
{
  "name": "bulbasaur",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
}]

describe('Funcion Ordenar AZ', () => {
  it('is a function', () => {
    expect(typeof orderdataAZ).toEqual('function');
  });
  it ('is a function', () => {
    expect(orderdataAZ(dataEqual)).toEqual(dataEqual);
  });

  it('con un argumento de array de datos que tenga name, returns array de data organizada', () => {
    const resultAZ = [
      {

        "name": "bulbasaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      },

      {
        "name": "charmeleon",
        "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
      },

      {
        "name": "ivysaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      },

      {
        "name": "venusaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      }

    ]
    expect(orderdataAZ(dataprueba)).toEqual(resultAZ);
  });
});

let datatest2 = [
  {
    "name": "bulbasaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  },

  {
    "name": "charmeleon",
    "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
  },

  {
    "name": "ivysaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  },

  {
    "name": "venusaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
  }
]
describe('Funcion Ordenar ZA', () => {
  it('is a function', () => {
    expect(typeof orderdataZA).toEqual('function');
  });
  it('con un argumento de array de datos que tenga name, returns array de data organizada', () => {
    const resultZA = [
      {
        "name": "venusaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
      },

      {
        "name": "ivysaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
      },

      {
        "name": "charmeleon",
        "img": "https://www.serebii.net/pokemongo/pokemon/005.png",
      },

      {
        "name": "bulbasaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
      }
    ]
    expect(orderdataZA(datatest2)).toEqual(resultZA);
  });
});


//let datatestfilter = [{






// describe('Funcion FilterDataWater', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });