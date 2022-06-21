/* eslint-disable react/prop-types */
import React, { memo } from "react";
import grid from "./Grid.module.scss";
import { items } from "../../constants/items";
import { Item } from "../Item/Item";
// eslint-disable-next-line no-unused-vars
// type = web || react
const Grid = ({ type }) => {
  const filtered = items.find((item) => item.category === type);
  const data = filtered.data.map((item) => (
    <Item key={item.id} img={item.img} title={item.title} link={item.link} />
  ));

  return <div className={grid.grid}>{data}</div>;
};

export default memo(Grid);
