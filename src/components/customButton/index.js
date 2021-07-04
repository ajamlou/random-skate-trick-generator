import React from "react";
import "./styles.css";
const CustomButton = ({ title, className }) => {
  return (
    <button type="button" className={className}>
      {title}
    </button>
  );
};

export default CustomButton;
