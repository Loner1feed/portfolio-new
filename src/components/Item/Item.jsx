/* eslint-disable react/prop-types */
import React from "react";
import item from "./Item.module.scss";

export const Item = ({ img, link, title }) => {
  return (
    <div className={item.item}>
      <div className={item.upper}>
        <div className={item.img}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} />
          </a>

          <div className={item.back}></div>
        </div>
        <span className={item.title}>{title}</span>
      </div>
    </div>
  );
};
