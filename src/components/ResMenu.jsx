import { useEffect, useState } from "react";
import { RES_MENU } from "../utils/constant";
import style from "./ResMenu.module.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import Restaurantcategory from "./RestaurantCategory";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return (
      <div className={style.shimm}>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
      </div>
    );
  }
  const { name, avgRating, locality, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories); 
  return (
    <center>
      <h2>{name}</h2>
      <p className={style.para}>
        Rating: {avgRating}
        <FcRating /> || {locality} || {costForTwoMessage}
      </p>
      <h4>Menu</h4>
      {categories.map((categ) => (<Restaurantcategory data={categ?.card?.card}/>))}
      {/* <ul>
        {itemCards.map((list) => (
          <li key={list.card.info.id}>
            {" "}
            {list.card.info.name} - {" Rs."} {list.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </center>
  );
};
export default ResMenu;
