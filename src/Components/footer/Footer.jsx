import React from "react";

import "./Footer.css";
import Title from "../footer-title/Title";
import Branding from "../branding/Branding";
import Links from "../sitewide-links/Links";
import Copyright from "../copyright/Copyright";
import Media from "../social-media/Media";
import Payment from "../payment-methods/Payment";
import TopPage from "../TopPage/TopPage";

export default function Footer() {
  return (
    <div className="footer-container">
      <TopPage />
      <div className="footer-wrapper">
        <Title />
        <div className="link-branding-container">
          <Branding />
          <Links />
        </div>
        <hr className="footer-sepration-line"/>
        <div className="copyright-media-payment-container">
          <Copyright />
          <div id="social-media">
            <Media />
          </div>
          <Payment />
        </div>
      </div>
    </div>
  );
}
