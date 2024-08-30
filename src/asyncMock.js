//listado de practica para acceder a los objetos
//eventualmente queda como un array vacio que se completa con una funcion que le da valor al retornarlo con un json parseado
let listaDePractica = [
 { IDid: 1, stock: 10, name: "Taza de café", price: 5.99 },
  { id: 2, stock: 8, name: "Taza de té", price: 6.49 },
  { id: 3, stock: 15, name: "Taza de chocolate", price: 7.99 },
  { id: 4, stock: 5, name: "Taza de viaje", price: 9.99 },
  { id: 5, stock: 20, name: "Plato de cena", price: 12.99 },
  { id: 6, stock: 18, name: "Plato de postre", price: 8.99 },
  { id: 7, stock: 25, name: "Plato de sopa", price: 11.49 },
  { id: 8, stock: 12, name: "Plato llano", price: 9.49 },
  { id: 9, stock: 7, name: "Mate clásico", price: 15.99 },
  { id: 10, stock: 9, name: "Mate moderno", price: 19.99}
];

//tengo que hacer una funcion que tome un archivo JSON (seria una lista de cada linea), la convierta en js y la guarde en listaDePractica, asi funciona el resto de funciones de busqueda con este array.
//Osea siempre que se seleccione una linea se tiene que activar la funcion, pasandole la linea seleccionada como JSON y retornando el listado.
//asi creo que podria utilizar los JSON de practica
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
  const result = listaDePractica.find((item) => item.id === id);
  return result ? result : "producto no encontrado";
};

//funcion de filtrado por nombres
export const productByName = (string) => {
  return listaDePractica.filter(
    (item) => item.name.toLocaleLowerCase() === string.toLocaleLowerCase()
  );
};
