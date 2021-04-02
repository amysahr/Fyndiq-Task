import React from 'react'

import './TopPage.css'
import topPageImage from '../../assets/svgs/top-curve.svg'
import arrowIcon from '../../assets/svgs/arrow.svg'

export default function TopPage() {
    return (
        <div>
            <img src={topPageImage} alt="Curve"/>
            <button className="toppage-circlecheckmark">
                <img src={arrowIcon} alt="Arrow icon"/>
            </button>
        </div>
    )
}
