import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import {routes} from "../utils/routes";
import "../styles/Page.css"

export default function Main(){
  return (
    <main>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={900}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component/>
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </main>
  )
}
