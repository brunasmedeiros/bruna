import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import {routes} from "../utils/routes";
import ContactFloatEmail from "./ContactFloatEmail";

const style = {
  height: "95vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default function Content(){
  return (
    <React.Fragment>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={900}
              classNames="page"
              unmountOnExit
            >
              <div className="page" style={style}>
                <Component/>
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
      <ContactFloatEmail />
    </React.Fragment>
  )
}