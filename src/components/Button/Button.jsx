import React from "react";
import button from "./Button.module.scss";

// eslint-disable-next-line react/prop-types
export const Button = ({ text, type = "", link = "" }) => {
  return (
    <a
      href={link ? link : "javascript://"}
      download={link ? true : false}
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
