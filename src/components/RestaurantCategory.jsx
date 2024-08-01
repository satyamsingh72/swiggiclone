import { IoIosArrowDropdownCircle } from "react-icons/io";
import style from "./RestaurantCategory.module.css";
import ItemLists from "./ItemLists";
import { useState } from "react";
const Restaurantcategory = ({data, showItems, setShowIndex}) => {
    
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className={style.container}>
            <div className={style.minicontainer} onClick={handleClick}>
            <span id={style.row}>{data.title} ({data.itemCards.length})</span>
            <span id={style.aro}><IoIosArrowDropdownCircle />
            </span>
            </div>
            {showItems && <ItemLists items={data.itemCards}></ItemLists>}
        </div>
    )
}
export default Restaurantcategory;