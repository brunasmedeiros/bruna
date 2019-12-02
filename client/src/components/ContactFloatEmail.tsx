import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactFloatEmail() {
  return (
    <div className="email__contact">
      <a href="mailto:enosbruna@gmail.com?subject=Hello">
        <FontAwesomeIcon icon="envelope" />{"  "} enosbruna@gmail.com
      </a>
    </div>
  )
}