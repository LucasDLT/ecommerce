import { useEffect, useState } from "react";
import {openList} from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    openList()
      .then((response) => setItems(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>ItemDetailContainer</h1>
      <section>
        {items.map((product, id) => (
          <ItemDetail key={id} item={product} />
          
        ))}
      </section>
    </>
  );
}

