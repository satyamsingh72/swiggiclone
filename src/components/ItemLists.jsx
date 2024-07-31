import style from "./ItemLists.module.css"
const ItemLists = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((c) => (
        <div className={style.container} key={c.card.info.id}>
          <div className={style.slot}>
            <div className={style.miniContainer}>{c.card.info.name} {" "} Rs.{c.card.info.price / 100}</div><br/>
            <p className={style.discription}>{c.card.info.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};
export default ItemLists;
