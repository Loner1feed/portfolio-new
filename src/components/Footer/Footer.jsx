import React from "react";
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
          </div>

          <div className={footer.info}>
            <span className={footer.info__heading}>e-mail</span>

            <span className={footer.info__sub}>gto200313@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
