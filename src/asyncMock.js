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
