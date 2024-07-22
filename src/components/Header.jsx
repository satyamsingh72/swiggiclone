import { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
const Header = () => {
  const [initialButton, setInitialButton] = useState("Sign In");
  const onlineCurrStatus = useOnlineStatus();
  let Yes = "yes";
  let No = "no";

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
          <Link to="/">Home</Link>
        </li>
        <li className={style.list}>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className={style.list}>
          <Link to="/about">About</Link>
        </li>
        <li className={style.list}>Services</li>
        <li className={style.list}>
          <Link to="/contact">Contact</Link>
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
