import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import style from "./Cart.module.css";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
  const cartItems = useSelector((store) => store.cart.items);
  return <div className={style.container}>
    <button onClick={handleClearCart}>Clear Cart</button>
    <ItemLists items={cartItems}/>
  </div>;
};
export default Cart;
