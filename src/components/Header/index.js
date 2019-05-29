import React from "react";
import Summary from "../Character/Summary";
import "./header.scss";

function Header(props) {
  return (
    <div className="c-header__container">
      <header className="c-header">
        <h1 className="c-header__logo">WHFRP Generator</h1>
      </header>
      <Summary character={props.character} />
    </div>
  );
}

export default Header;
