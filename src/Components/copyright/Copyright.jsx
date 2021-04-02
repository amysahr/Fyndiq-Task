import React from 'react'

import './Copyright.css'
import LogoImg from '../../assets/svgs/logo.svg' 

export default function Copyright() {
    return (
        <div className="copyright-wrapper">
            <div className="copyright-logo"><img src={LogoImg} alt=""/>
        </div>
        <div className="copyright-text">
           <p className="copyright-items">Copyright © 2010-2021</p>
           <p className="copyright-items">Fyndiq AB, Org.nr: 556792-1712</p> 
           </div>
        </div>
    )
}
 