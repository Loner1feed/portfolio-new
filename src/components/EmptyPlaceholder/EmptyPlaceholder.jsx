import React from "react";
import { Motion, spring } from "react-motion";
import empty from "./EmptyPlaceholder.module.scss";

export const EmptyPlaceholder = () => {
  return (
    <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
      {(style) => (
        <div className={empty.wrap} style={{ opacity: style.opacity }}>
          <p className={empty.text}>
            Sorry, some new projects will be added as soon as possible{" "}
          </p>
        </div>
      )}
    </Motion>
  );
};
