import React from "react";
import "./character.scss";

function Summary(props) {
  const { firstName, lastName, race, gender, career } = props.character;
  return (
    <div className="c-character__summary">
      <h3>
        {firstName} {lastName}
      </h3>
      <small>
        {race.name} {gender.name}, {career.name}
      </small>
    </div>
  );
}

export default Summary;
