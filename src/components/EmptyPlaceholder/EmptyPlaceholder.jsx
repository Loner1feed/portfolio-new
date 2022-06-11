import React from "react";
import empty from "./EmptyPlaceholder.module.scss";

export const EmptyPlaceholder = () => {
  return (
    <div className={empty.wrap}>
      <p className={empty.text}>
        Sorry, some new projects will be added as soon as possible{" "}
      </p>
    </div>
  );
};
