/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import item from "./Item.module.scss";

import { Motion, spring } from "react-motion";
import { useEffect } from "react";

export const Item = ({ img, link, title }) => {
  const itemRef = useRef(null);
  const [show, setShow] = useState(false);
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        setShow(true);
      }
    });
  }

  useEffect(() => {
    // console.log(itemRef);
    let options = {
      threshold: [0.5],
    };
    let observer = new IntersectionObserver(onEntry, options);
    if (show !== true) {
      observer.observe(itemRef.current);
    }
  }, []);

  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: spring(show ? 1 : 0) }}
    >
      {(style) => (
        <div
          ref={itemRef}
          className={item.item}
          style={{ opacity: style.opacity }}
        >
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
      )}
    </Motion>
  );
};
