import React, { useState } from "react";
import generateCharacter from "./utils/generateCharacter";
import "./App.scss";

function App() {
  const [character] = useState(generateCharacter);
  return (
    <div className="App">
      <p>
        Hello {character.characterFirstName} {character.characterLastName}, you
        are a {character.characterRace.name} {character.characterGender.name}{" "}
        {character.characterClass} {character.characterCareer.name}
      </p>
    </div>
  );
}

export default App;
