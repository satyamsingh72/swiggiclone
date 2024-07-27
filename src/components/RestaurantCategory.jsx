import { IoIosArrowDropdownCircle } from "react-icons/io";
import style from "./RestaurantCategory.module.css";
import ItemLists from "./ItemLists";
const Restaurantcategory = ({data}) => {
    //console.log(data)
    return (
        <div className={style.container}>
            <div className={style.minicontainer}>
            <span id={style.row}>{data.title} ({data.itemCards.length})</span>
            <span id={style.aro}><IoIosArrowDropdownCircle />
            </span>
            </div>
            <ItemLists items={data.itemCards}></ItemLists>
            
        </div>
    )
}
export default Restaurantcategory;