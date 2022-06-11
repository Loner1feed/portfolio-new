import React from "react";
import body from "./Body.module.scss";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { DescBlock } from "../DescBlock/DescBlock";
import { Grid } from "../Grid/Grid";
import { EmptyPlaceholder } from "../EmptyPlaceholder/EmptyPlaceholder";

export const Body = () => {
  return (
    <div className={body.body}>
      <Tabs className={body.body__wrap}>
        <h2 className={body.title}>MY PROJECTS</h2>
        <TabList className={body.tabList}>
          <Tab selectedClassName={body.tabSelected} className={body.tab}>
            Standart adaptive websites
          </Tab>
          <Tab selectedClassName={body.tabSelected} className={body.tab}>
            React web apps
          </Tab>
        </TabList>

        <TabPanel className={body.tabPanel}>
          <DescBlock
            stack="HTML, CSS/SCSS, JS/JQUERY"
            description="Classic adaptive landing page or multi page websites"
          />
          <Grid />
        </TabPanel>

        <TabPanel className={body.tabPanel}>
          <DescBlock
            stack="React, Redux Toolkit, REST, NodeJS"
            description="Multi functional, modern and scalable websites (a.c. web apps)"
          />
          <EmptyPlaceholder />
        </TabPanel>
      </Tabs>
    </div>
  );
};
