import React from "react";
import "./AddComponent.css";

const AddComponent = () => {
  const handleClick = () => {
    alert("Clicked!"); 
  };

  return (
    <button className="add-button" onClick={handleClick} type="button">
     Add
    </button>
  );
};

export default AddComponent;
