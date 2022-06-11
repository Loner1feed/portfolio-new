/* eslint-disable react/prop-types */
import React from "react";
import grid from "./Grid.module.scss";
import { items } from "../../constants/items";
import { Item } from "../Item/Item";
// eslint-disable-next-line no-unused-vars
export const Grid = () => {
  const filtered = items.find((item) => item.category === "web");
  console.log(filtered);
  const data = filtered.data.map((item) => (
    <Item key={item.id} img={item.img} title={item.title} link={item.link} />
  ));

  return <div className={grid.grid}>{data}</div>;
};
