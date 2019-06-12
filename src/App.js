import React, { useState } from "react";
import generateCharacter from "./utils/generateCharacter";
import Header from "./components/Header/index";
import "./App.scss";

function App() {
  const [character] = useState(generateCharacter);
  return (
    <div>
      <Header character={character} />
      <div className="c-intro">
        <p>
          Hello {character.firstName} {character.lastName}, you are a{" "}
          {character.race.name} {character.gender.name} {character.age}.
        </p>
        <p>
          You live your life as a {character.class} {character.career.name}{" "}
          {character.wounds}
        </p>
      </div>
    </div>
  );
}

export default App;
