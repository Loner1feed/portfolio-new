import React from "react";
import badge from "./Badge.module.scss";
// eslint-disable-next-line react/prop-types
export const Badge = ({ link = "", icon }) => {
  return (
    <a href={link} target="_blank" className={badge.badge} rel="noreferrer">
      {icon}
    </a>
  );
};
