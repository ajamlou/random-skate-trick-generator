import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../customButton";
import "./styles.css";

const PlayGame = (props) => {
  const [stance, setStance] = useState("");
  const [direction, setDirection] = useState("");
  const [spin, setSpin] = useState("");
  const [flip, setFlip] = useState("");

  const level = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const variations = {
    stance: ["", "Fakie", "Switch", "Nollie"],
    direction: ["", "Backside", "Frontside"],
    spin: ["", "180", "360", "", "", ""],
    flip: [
      "Kickflip",
      "Heelflip",
      "Pop Shuvit",
      "Varial Kickflip",
      "Varial Heelflip",
      "Inward Heelflip",
      "Hardflip",
      "",
      "",
    ],
  };

  const setBeginnerTrick = () => {
    setStance(
      variations.stance.slice(0, 2)[
        Math.floor(Math.random() * variations.stance.slice(0, 2).length)
      ]
    );
    setDirection(
      variations.direction[
        Math.floor(Math.random() * variations.direction.length)
      ]
    );
    setSpin(
      variations.spin.slice(0, 2)[
        Math.floor(Math.random() * variations.spin.slice(0, 2).length)
      ]
    );
    setFlip(
      variations.flip.slice(0, 3)[
        Math.floor(Math.random() * variations.flip.slice(0, 4).length)
      ]
    );
  };

  const setExperiencedTrick = () => {
    setStance(
      variations.stance[Math.floor(Math.random() * variations.stance.length)]
    );
    setDirection(
      variations.direction[
        Math.floor(Math.random() * variations.direction.length)
      ]
    );
    setSpin(
      variations.spin[Math.floor(Math.random() * variations.spin.length)]
    );

    setFlip(
      variations.flip[Math.floor(Math.random() * variations.flip.length)]
    );
  };

  const newTrick = () => {
    if (level === "beginner") {
      setBeginnerTrick();
    }
    if (level === "experienced") {
      setExperiencedTrick();
    }
  };

  return (
    <section className="play-container">
      <h2>Click on the button to see which trick to do!</h2>
      <h1 className="trick">
        {stance} {direction} {spin} {flip}
      </h1>
      <div onClick={newTrick}>
        <CustomButton title="New Trick" className="fill" />
      </div>
      <div className="go-back">
        <Link to="/">
          Go Back
          {/* <CustomButton title="Go Back" className="fill back" /> */}
        </Link>
      </div>
    </section>
  );
};

export default PlayGame;
