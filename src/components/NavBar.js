import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "pink",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"  
        exact
        style={linkStyles}
        activeStyle={{
          background: "green",
        }}
      >
        Movies
      </NavLink>

      <NavLink
        to="/Directors"  
        exact
        style={linkStyles}
        activeStyle={{
          background: "grey",
        }}
      >
        Directors
      </NavLink>

      <NavLink
        to="/Actors"  
        exact
        style={linkStyles}
        activeStyle={{
          background: "blue",
        }}
      >
        Actors
      </NavLink>


    </div>
  );
}

export default NavBar;
