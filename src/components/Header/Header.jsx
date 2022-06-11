import React from "react";
import { Telegram } from "../../assets/icons/Telegram";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Person } from "../Person/Person";
import header from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={header.header}>
      {/* header top */}
      <div className={header.top}>
        <div className={header.top__wrap}>
          <Logo />
          <div className={header.links}>
            <Badge icon={<Telegram />} link="https://t.me/Loner_feed" />
          </div>
        </div>
      </div>

      {/* header banner  */}
      <div className={header.banner}>
        {/* background */}
        <div className={header.bg}>
          <div className={header.bg__solid}></div>
          <div className={header.bg__dotted}></div>
        </div>

        <div className={header.banner__wrap}>
          <Person text="Just do my own work" />
          <div className={header.text}>
            <h2 className={header.title}>Hello!</h2>

            <p className={header.subtitle}>
              My name is Eugen, I&apos;m a Front-end developer. <br /> Ready to
              make your project better and more interesting.
            </p>

            <Button text="My resume" type="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};
