//listado de practica para acceder a los objetos
const listaDePractica = [
  { ID: 1, STOCK: 10, NAME: "Taza de café", PRICE: 5.99 },
  { ID: 2, STOCK: 8, NAME: "Taza de té", PRICE: 6.49 },
  { ID: 3, STOCK: 15, NAME: "Taza de chocolate", PRICE: 7.99 },
  { ID: 4, STOCK: 5, NAME: "Taza de viaje", PRICE: 9.99 },
  { ID: 5, STOCK: 20, NAME: "Plato de cena", PRICE: 12.99 },
  { ID: 6, STOCK: 18, NAME: "Plato de postre", PRICE: 8.99 },
  { ID: 7, STOCK: 25, NAME: "Plato de sopa", PRICE: 11.49 },
  { ID: 8, STOCK: 12, NAME: "Plato llano", PRICE: 9.49 },
  { ID: 9, STOCK: 7, NAME: "Mate clásico", PRICE: 15.99 },
  { ID: 10, STOCK: 9, NAME: "Mate moderno", PRICE: 19.99 },
];

//funcion que simula el retrado en la peticion, retorna un listado
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
  const result = listaDePractica.find((item) => item.ID === id);
  return result ? result : "producto no encontrado";
};

//funcion de filtrado por nombres
export const productByName = (string) => {
  return listaDePractica.filter(
    (item) => item.NAME.toLocaleLowerCase() === string.toLocaleLowerCase()
  );
};




