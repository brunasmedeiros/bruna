import React from "react";
import { routes } from "../utils/routes";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css"

function Navigation(){
  return (
    <header>
      <nav>
        {routes.map(({ path, name }) => (
          <NavLink exact key={path} className="button--link" to={path}>
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navigation;
