import { orderdataAZ, orderdataZA, FilterDataWater, calculatorPoke } from '../src/data.js';
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
let dataEqual = [{
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
  },

  {
    "name": "ivysaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  },
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
      },

    ]
    expect(orderdataZA(datatest2)).toEqual(resultZA);
  });
});


let dataTestFilter = [
  {
    "name": "bulbasaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "grass",
      "poison"
    ],
  },

      {
        "name": "pidgeotto",
        "img": "https://www.serebii.net/pokemongo/pokemon/017.png",
        "type": [
          "normal",
          "flying"
        ],
      }
    ]

describe('FilterDataWater', () => {
  it('is a function', () => {
    expect(typeof FilterDataWater).toBe('function');
  });

  it('con un argumento de array de datos que tenga type, returns array de data por su tipo', () => {

    const resultFilter = [
      {
        "name": "bulbasaur",
        "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "grass",
          "poison"
        ],
      },

    ]


      expect(FilterDataWater("poison", dataTestFilter)).toEqual(resultFilter);
  });
});

let dataTestCalculator = [
  {
    "name": "bulbasaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    }
  },

  {
    "name": "ivysaur",
    "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
    "size": {
      "height": "0.99 m",
      "weight": "13.0 kg"
    }

  },
]

  describe('calculatorPoke', () => {
    it('is a function', () => {
      expect(typeof calculatorPoke).toEqual('function');
    });

    it('con un argumento de array de datos que tenga data desordenada, returns array de data por su tamaño de mas grande a mas pequeño', () => {

      const resultCalculator = 
        {
          "name": "ivysaur",
          "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
          "size": {
            "height": "0.99 m",
            "weight": "13.0 kg"
          },
        }
   
      

        expect(calculatorPoke(dataTestCalculator)).toEqual(resultCalculator);
    });
  });

