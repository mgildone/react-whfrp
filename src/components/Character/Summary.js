import React from "react";
import "./character.scss";

function Summary(props) {
  const {
    characterFirstName,
    characterLastName,
    characterRace,
    characterGender,
    characterCareer
  } = props.character;
  return (
    <div className="c-character__summary">
      <h3>
        {characterFirstName} {characterLastName}
      </h3>
      <small>
        {characterRace.name} {characterGender.name}, {characterCareer.name}
      </small>
    </div>
  );
}

export default Summary;
