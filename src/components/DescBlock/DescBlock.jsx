/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Motion, spring } from "react-motion";
import desc from "./DescBlock.module.scss";

export const DescBlock = ({ stack, description }) => {
  return (
    <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
      {(style) => (
        <div className={desc.wrap} style={{ opacity: style.opacity }}>
          <p className={desc.row}>
            <span className={desc.colored}>Stack:</span>
            {stack}
          </p>

          <p className={desc.row}>
            <span className={desc.colored}>Description:</span>
            {description}
          </p>
        </div>
      )}
    </Motion>
  );
};
