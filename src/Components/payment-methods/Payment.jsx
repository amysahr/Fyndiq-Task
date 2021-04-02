import React from 'react'

import './Payment.css'

import klarna from '../../assets/svgs/klarna.svg'
import mastercard from '../../assets/svgs/mastercard.svg'
import visa from '../../assets/svgs/visa.svg'
import trygg from '../../assets/svgs/trygg.svg'

export default function Media() {
    return (
        <div>
            <ul className="payment-wrapper">
                <li><img src={klarna} alt="Klarna"/></li>
                <li><img src={mastercard} alt="Mastercard"/></li>
                <li><img src={visa} alt="Visa"/></li>
                <li><img src={trygg} alt="Trygg"/></li>
            </ul>
        </div>
    )
}
