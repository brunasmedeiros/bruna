import React from "react";

function Navigation(){
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="container">
            <ul id="nav-mobile" className="right">
              <li><a href="/about">About</a></li>
              <li><a href="/career">Career</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navigation;