import React, { useState } from "react";
import "../style/Menu.css";

const FoodItem = (props) => {
    const [num , setnum] = useState(0)
  let item = props.item;
  function clickHandler() {
    setnum(num+1)
  }
  return (
    <div className="FoodItemContainer">
      <img
        src={item.imageURL}
        alt="dish name"
        width="200px"
        height="200px"
      ></img>
      <h3>{item.name}</h3>
      <h4>{item.price}</h4>
      <p>{item.description}</p>
      <button onClick={clickHandler}>{num}</button>
    </div>
  );    
};

export default FoodItem;
