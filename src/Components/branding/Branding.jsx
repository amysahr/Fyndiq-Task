import React from "react";

import './Branding.css'
import checkMark from '../../assets/svgs/circle-checkmark.svg'

export default function Branding() {
  return (
    <div className="branding-wrapper">
      <div className="branding-description">
      <h4>Gör som 1,6 miljoner kunder, hitta fynden hos oss.</h4>
      <p>
        Fyndshopping är kul! för att det ska vara superlätt för dig att hitta
        Sveriges allra bästa fynd har Fyndiq samlat miljontals fyndprodukter
        från hundratals butiker under ett och samma tak för dig att enkelt
        klicka hem här.
      </p>
      </div>
      <ul className="ulCheckMark">
        <li>
          <span className="circle-checkmark">
            <img src={checkMark} alt="checkmark"/>
          </span>
          Alltid 9 kr frakt
        </li>
        <li>
          <span className="circle-checkmark">
          <img src={checkMark} alt="checkmark"/>
          </span>
          Snabba leveranser
        </li>
        <li>
          <span className="circle-checkmark">
          <img src={checkMark} alt="checkmark"/>
          </span>
          Svensk kundtiänst
        </li>
      </ul>
    </div>
  );
}
