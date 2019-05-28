import React, { useState } from "react";
import ReactDOM from "react-dom";
import generateCharacter from "./generateCharacter";

import "./styles.css";

console.log(JSON.stringify(generateCharacter));

function App() {
  const [character] = useState(generateCharacter);
  return (
    <div className="App">
      <p>
        Hello {character.characterFirstName} {character.characterLastName}, you
        are a {character.characterRace.name} {character.characterGender.name}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App character={generateCharacter} />, rootElement);
