import React, { useState } from "react";

const Btn = () => {
  const [name, setName] = useState("Ranjeet");
  const changer = () => {
    setName("Anjali");
  };
  return (
    <div className="main">
      <div className="str">
        <h3>{name}</h3>
        <button className="btn" onClick={changer}>
          click me
        </button>
      </div>
    </div>
  );
};

export default Btn;
