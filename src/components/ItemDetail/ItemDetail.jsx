export default function ItemDetail({ item }) {
  return (
    <div>
      <div>
        <img src={item.IMG} alt={item.NAME} />
      </div>
      <div>
        <span>{item.STOCK} </span>
        <span>{item.NAME} </span>
        <span>{item.PRICE} </span>
      </div>
    </div>
  );
}
