/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import desc from "./DescBlock.module.scss";

export const DescBlock = ({ stack, description }) => {
  return (
    <div className={desc.wrap}>
      <p className={desc.row}>
        <span className={desc.colored}>Stack:</span>
        {stack}
      </p>

      <p className={desc.row}>
        <span className={desc.colored}>Description:</span>
        {description}
      </p>
    </div>
  );
};
