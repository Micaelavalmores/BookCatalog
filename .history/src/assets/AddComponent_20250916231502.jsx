import React from "react";
import "./AddComponent.css";

const AddComponent = () => {
  const handleClick = () => {
    alert("Add button clicked"); 
  };

  return (
    <button className="add-button" onClick={handleClick} type="button">
      +
    </button>
  );
};

export default AddComponent;
