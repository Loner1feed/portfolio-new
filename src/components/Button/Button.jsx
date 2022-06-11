import React from "react";
import button from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
export const Button = ({ text, type = "" }) => {
  return (
    <a
      href="#"
      className={
        type === "blue"
          ? [button.button__blue, button.button].join(" ")
          : button.button
      }
    >
      {text}
    </a>
  );
};
