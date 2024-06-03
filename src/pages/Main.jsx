import React from "react";

// styles
import main from "./Main.module.scss";
import { Button } from "../components/Button/Button";
import { Dots } from "../components/Dots/Dots";

const Main = () => {
  return (
    <div className={main.main}>
      <div className={main.background}>
        <Dots />
      </div>
      <div className={main.main__message}>
        <h1>So...</h1>
        <p>
          This website has got a new address! You can click the button below to
          redirect.
        </p>
        <Button
          type="blue"
          text="Let's go!"
          link="https://loner1feed.github.io/portfolio-v2"
        />
      </div>
    </div>
  );
};
export default Main;
