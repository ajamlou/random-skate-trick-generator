import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../customButton";
import "./styles.css";

const PageNotFound = (props) => {
  return (
    <div className="not-found-container">
      <h1>Oops! Looks like this page does not exist.</h1>
      <Link to="/">
        <CustomButton title="Go To Homepage" className="fill back" />
      </Link>
    </div>
  );
};

export default PageNotFound;
