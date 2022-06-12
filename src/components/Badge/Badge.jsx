import React from "react";
import badge from "./Badge.module.scss";
// eslint-disable-next-line react/prop-types
export const Badge = ({ link = "", icon, type = "" }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={type === "footer" ? badge.footerBadge : badge.badge}
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};
