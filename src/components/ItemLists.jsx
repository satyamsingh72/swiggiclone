import { useDispatch } from "react-redux";
import style from "./ItemLists.module.css";
import { addItem } from "../utils/cartSlice";
const ItemLists = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    dispatch(addItem(c));
  };
  return (
    <div>
      {items.map((c) => (
        <div className={style.container} key={c.card.info.id}>
          <div className={style.slot}>
            <div className={style.miniContainer}>
              {c.card.info.name} Rs.{c.card.info.price / 100} <button className={style.btn} onClick={() => handleAddItem(c)}>Add+</button>
            </div>
            <br />
            <p className={style.discription}>{c.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemLists;
