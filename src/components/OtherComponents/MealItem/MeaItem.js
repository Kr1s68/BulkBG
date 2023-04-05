import React from "react";
import { toast } from "react-hot-toast";
import "../MealItem/MealItem.css";

const MealItem = ({ item }) => {
  return (
    <div className="meal-item">
      <div className="meal-date">{item.date}</div>
      <div className="meal-info">
        <div>Закуска : {item.breakfast} калории</div>
        <div>Обяд : {item.lunch} калории</div>
        <div>Вечеря : {item.dinner} калории</div>
        <div>
          Общо :{" "}
          {parseInt(item.dinner) +
            parseInt(item.breakfast) +
            parseInt(item.lunch)}{" "}
          калории
        </div>
      </div>
    </div>
  );
};

export default MealItem;
