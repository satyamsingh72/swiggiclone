import style from "./ItemLists.module.css"
const ItemLists = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((c) => (
        <div class={style.container}>
          <div >
            <span>{c.card.info.name}</span>{" "}
            <span>Rs.{c.card.info.price / 100}</span>
          </div>
          <span>{c.card.info.description}</span>
        </div>
      ))}
    </div>
  );
};
export default ItemLists;
