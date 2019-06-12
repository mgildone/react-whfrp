import React from "react";
import "./character.scss";

function Summary(props) {
  const { firstName, lastName, race, gender, career } = props.character;
  const currentCareer = career.paths[0];
  return (
    <div className="c-character__summary">
      <h3>
        {firstName} {lastName}
      </h3>
      <small>
        {race.name} {gender.name}, {currentCareer.name}
      </small>
    </div>
  );
}

export default Summary;
