import React from 'react';
import logo from "./Images/note.ico"

function Header() {
  return (
      <>
    <div className="header">
      <img alt='logo' src={logo} />
      <h1> Secrecy </h1>
    </div>
    </>
  );
}

export default Header;