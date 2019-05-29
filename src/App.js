import React, { useState } from "react";
import generateCharacter from "./utils/generateCharacter";
import Header from "./components/Header/index";
import "./App.scss";

function App() {
  const [character] = useState(generateCharacter);
  return (
    <div>
      <Header />
      <div className="c-intro">
        <p>
          Hello {character.characterFirstName} {character.characterLastName},
          you are a {character.characterRace.name}{" "}
          {character.characterGender.name}.
        </p>
        <p>
          You live your life as a {character.characterClass}{" "}
          {character.characterCareer.name}
        </p>
      </div>
    </div>
  );
}

export default App;
