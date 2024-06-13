import React, { useState } from "react";

const Product = (props) => {
  let [isAvailable, setIsAvailable] = useState("yes");
  // const makeNotAvailable = () => {
  //   setIsAvailable("no");
  // };

  return (
    <div className="product">
      <img className="img" src={props.url} alt="#" />
      <h3>{props.name}</h3>
      <p>{props.price}Rs</p>
      <p className="click">{isAvailable}</p>
      <button
        onClick={() => {
          setIsAvailable("no");
        }}
      >
        click
      </button>
    </div>
  );
};

export default Product;
