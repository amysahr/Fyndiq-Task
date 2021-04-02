import React from 'react'

import "./Media.css"
import FBLogo from '../../assets/svgs/FB-logo.svg'
import instaLogo from '../../assets/svgs/insta.svg'
import YTLogo from '../../assets/svgs/youtube.svg'
import snapchat from '../../assets/svgs/snapchat.svg'

export default function Media() {
    return (
        <div>
            <ul className="social-media-wrapper">
                <li><img src={FBLogo} alt="Facebook"/></li>
                <li><img src={snapchat} alt="Snapchat"/></li>
                <li><img src={instaLogo} alt="Instagram"/></li>
                <li><img src={YTLogo} alt="Youtube"/></li>
            </ul>
        </div>
    )
}
