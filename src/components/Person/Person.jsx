import React from "react";
import person from "./Person.module.scss";
import image from "../../assets/person2.png";

// eslint-disable-next-line react/prop-types
export const Person = ({ text }) => {
  return (
    <div className={person.person}>
      <img src={image} alt="my photo" />
      <span className={person.label}>{text}</span>
    </div>
  );
};
