import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  view,
  ...otherProps
}) => (
  <button
    className= {` ${view ? "view" : ""} ${inverted ? "inverted" : ""} ${ isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
