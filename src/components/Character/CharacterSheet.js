import React from "react";
import "./character.scss";

function CharacterSheet(props) {
  const { firstName, lastName, race, gender, career } = props.character;
  return (
    <div className="c-character-sheet">
      <h3>
        {firstName} {lastName}
      </h3>
      <small>
        {race.name} {gender.name}, {career.name}
      </small>
    </div>
  );
}

export default CharacterSheet;
