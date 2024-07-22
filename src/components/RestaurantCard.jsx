import { useEffect, useState } from "react";
import style from "./RestaurantCard.module.css";
import { RESTAURAMT_LIST } from "../utils/constant";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const RestaurantCard = () => {
  const [restrauList, setRestrauList] = useState([]);
  const [searchRestro, setSearchRestro] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURAMT_LIST);
    const json = await data.json();
    setRestrauList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (restrauList.length === 0) {
    return (
      <div className={style.shimm}>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
        <Shimmer></Shimmer>
      </div>
    );
  }

  return (
    <div className={style.mainBody}>
      <input
        type="text"
        value={searchRestro}
        onChange={(e) => {
          const result = e.target.value;
          setSearchRestro(result);
        }}
      />
      <button
        onClick={() => {
          const searchRes = restrauList.filter((res) =>
            res.info.name.toLowerCase().includes(searchRestro.toLowerCase())
          );
          setFilteredRes(searchRes);
        }}
      >
        Search
      </button>

      <button
        className={style.button}
        onClick={() => {
          const filteredList = restrauList.filter(
            (list) => list.info.avgRating > 4.5
          );
          setFilteredRes(filteredList);
          console.log()
        }}
      >
        Premium Khana
      </button>
      <div className={style.body}>
        {filteredRes.map((resObj) => (
          <Link key={resObj.info.id} to={"/menu/" + resObj.info.id}>
            {" "}
            <RestaurantList resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RestaurantCard;
