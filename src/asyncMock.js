import line_air from './data/line_air.json'
import line_fire from './data/line_fire.json'
import line_earth from './data/line_earth.json'
import line_water from './data/line_water.json'

//listado de practica para acceder a los objetos
//eventualmente queda como un array vacio que se completa con una funcion que le da valor al retornarlo con un json parseado
let listaDePractica = [
  {
    id: 1,
    stock: 10,
    name: "Taza",
    price: 5.99,
    image: "https://i.imgur.com/CcpcgJx.png",
    category: "tazas",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 2,
    stock: 8,
    name: "Taza",
    price: 6.49,
    image: "https://i.imgur.com/0G846g9.png",
    category: "tazas",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 3,
    stock: 15,
    name: "Taza",
    price: 7.99,
    image: "https://i.imgur.com/KOzRVFE.png",
    category: "tazas",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 4,
    stock: 5,
    name: "bowl",
    price: 9.99,
    image: "https://i.imgur.com/ABL6VVK.png",
    category: "recipientes",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 5,
    stock: 20,
    name: "Plato",
    price: 12.99,
    image: "https://i.imgur.com/KOzRVFE.png",
    category: "platos",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 6,
    stock: 18,
    name: "Plato",
    price: 8.99,
    image: "https://i.imgur.com/8joA5HP.png",
    category: "platos",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 7,
    stock: 25,
    name: "Plato",
    price: 11.49,
    image: "https://i.imgur.com/ABL6VVK.png",
    category: "platos",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 8,
    stock: 12,
    name: "cazuela",
    price: 9.49,
    image: "https://i.imgur.com/3IMqKX5.png",
    category: "recipientes",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 9,
    stock: 7,
    name: "Mate ",
    price: 15.99,
    image: "https://i.imgur.com/QXy2DNO.png",
    category: "mates",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
  {
    id: 10,
    stock: 9,
    name: "sahumador",
    price: 19.99,
    image: "https://i.imgur.com/4Y5Zml7.png",
    category: "sahumadores",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a, animi vitae fugiat explicabo provident! Laudantium voluptatum sint temporibus iure dolores! Sequi quam suscipit in dolores vitae blanditiis consequuntur quae!",
  },
];

//tengo que hacer una funcion que tome un archivo JSON (seria una lista de cada linea), la convierta en js y la guarde en listaDePractica, asi funciona el resto de funciones de busqueda con este array.
//Osea siempre que se seleccione una linea se tiene que activar la funcion, pasandole la linea seleccionada como JSON y retornando el listado.
//asi cre   o que podria utilizar los JSON de practica
//aca voy a tener que usar el set del usestate para setear el estado con el array
export const getLineJson = (line) => {
  try {
    let listaDePractica = JSON.parse(line);
    return listaDePractica;
  } catch (error) {
    console.log(error);
    return null;
  }
};
//funcion en proceso es para los Json
export const combineProductList =(totalLine)=>{
  let unificatedList =[]
  totalLine.forEach(totalLine => {
    const productList = getLineJson(totalLine)
    if (productList) {
      unificatedList = unificatedList.concat(productList)
    }
  });
  return unificatedList
}

//funcion que simula el retrado en la peticion y retorna un listado
export const openList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (listaDePractica && listaDePractica.length > 0) {
        resolve(listaDePractica);
      } else {
        reject("Error al cargar el contenido de la seccion:Error en promesa");
      }
    }, 2000);
  });

//funcion que busca productos por ID
export const productById = (id) => {
  const numericId = Number(id);

  const result = listaDePractica.find((item) => item.id === numericId);

  return result || null;
};
//funcion para las CATEGORIAS 
export const productsByCategory = (category) => {
  return listaDePractica.filter(
    (item) => item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );
};

//funcion de filtrado por nombres
export const productByName = (string) => {
  return listaDePractica.filter(
    (item) => item.name.toLocaleLowerCase() === string.toLocaleLowerCase()
  );
};
