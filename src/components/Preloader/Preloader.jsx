import React from "react";
import pre from "./Preloader.module.scss";

export const Preloader = () => {
  return (
    <div className={pre.wrap}>
      <div className={pre.load}>
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
};
