import { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const [initialButton, setInitialButton] = useState("Sign In");
  const onlineCurrStatus = useOnlineStatus();
  let Yes = "yes";
  let No = "no";
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <nav className={style.container}>
      <img
        className={style.image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&s"
        alt="Logo"
      />
      <ul className={style.nav}>
        <li className={style.list}>
          Online Status: {onlineCurrStatus ? <IoEyeSharp /> : <FaEyeSlash />}
        </li>
        <li className={style.list}>
          <Link to="/" className={style.deco}>
            Home
          </Link>
        </li>
        <li className={style.list}>
          <Link to="/grocery" className={style.deco}>
            Grocery
          </Link>
        </li>
        <li className={style.list}>
          <Link to="/about" className={style.deco}>
            About
          </Link>
        </li>
        <li className={style.list}>Services</li>
        <li className={style.list}>
          <Link to="/contact" className={style.deco}>
            Contact
          </Link>
        </li>
        <li className={style.list}>
          <Link to="/cart" className={style.deco}>Cart {cartItems.length}</Link>
        </li>
        <li
          className={style.list}
          onClick={() => {
            initialButton === "Sign In"
              ? setInitialButton("Sign Out")
              : setInitialButton("Sign In");
          }}
        >
          {initialButton}
        </li>
      </ul>
    </nav>
  );
};
export default Header;
