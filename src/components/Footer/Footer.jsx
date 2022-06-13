import React from "react";
import { Github } from "../../assets/icons/Github";
import { Linkedin } from "../../assets/icons/Linkedin";
import { Telegram } from "../../assets/icons/Telegram";
import { Badge } from "../Badge/Badge";
import footer from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={footer.footer}>
      <div className={footer.footer__wrap}>
        <div className={footer.left}>
          <h2 className={footer.title}>contact</h2>

          <div className={footer.iconRow}>
            <Badge
              type="footer"
              icon={<Telegram />}
              link="https://t.me/Loner_feed"
            />
            <Badge
              type="footer"
              icon={<Linkedin />}
              link="https://www.linkedin.com/in/eugen-guriev-309035212/"
            />
            <Badge
              type="footer"
              icon={<Github />}
              link="https://github.com/Loner1feed"
            />
          </div>

          <div className={footer.info}>
            <span className={footer.info__heading}>e-mail</span>

            <span className={footer.info__sub}>lfeedwork05@gmail.com</span>
          </div>

          <div className={footer.info}>
            <span className={footer.info__heading}>phone:</span>

            <span className={footer.info__sub}>+380636564860</span>
          </div>
        </div>
      </div>
    </div>
  );
};
