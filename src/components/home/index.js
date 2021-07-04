import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/customButton";
import "./styles.css";

const HomePage = (props) => {
  return (
    <div className="home-container">
      <h1>Select game difficulty</h1>
      <div>
        <Link to="/play/beginner">
          <CustomButton title="Beginner" className="fill beg" />
        </Link>
        <Link to="/play/experienced">
          <CustomButton title="Experienced" className="fill exp" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
