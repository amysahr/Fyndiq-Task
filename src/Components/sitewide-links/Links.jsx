import React, {useState, useEffect}  from 'react'

import './Links.css'
import Media from '../social-media/Media'
import icon from '../../assets/svgs/expansion-icon.svg'

export default function Links() {

    const [data, setData] = useState([])

    //This function shows wheather the str argument is a whole url or not
    function isURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    const getUrl = (Tag, Url) => {
        if(isURL(Url)) {
            return Url
        }
        else {
            return `https://fyndiq.se/${Tag}/${Url}/`
        }
    }

    //Fetch data from footer endpoint and add a new blocks for mobile size
    useEffect(() => {
        async function fetchData(){
            const res = await fetch('https://shop-bff.fyndiq.se/cms/footer')
            res.json()
            .then(res => {
                res.footer.blocks.push({
                    "key": "SocialMedia",
                    "linkBlockTag": "socialMedia",
                    "linkBlockTitle": "Fyndiq in social media" 
                })
                setData(res.footer.blocks)
            })
            .catch(err => console.log(err))
        } 
        fetchData()
    }, [])

    return (
        <div className="link-container">
            {data.map(item => 
                <div id={"div" + item.key} className="list-wrapper" key={item.key}>
                    <div onClick={() => {
                        var menuTitle = document.getElementById("button" + item.key);
                        var menuBody = document.getElementById("body" + item.key);

                        if(menuTitle.classList.contains("list-expansion-image-open")){
                            menuTitle.classList.remove("list-expansion-image-open")
                            menuBody.classList.remove("links-open")
                        } else {
                            menuTitle.classList.add("list-expansion-image-open")
                            menuBody.classList.add("links-open")
                        }
                    }} className="list-title">
                        <h4>{item.linkBlockTitle}</h4>
                        <img id={"button" + item.key} className="list-expansion-image" src={icon} alt="expansion-icon"/>
                    </div>
                    <ul id={"body" + item.key} className="links">
                        {
                        (item.key === "SocialMedia"? 
                            <Media/>
                            :
                            item.links.map(link =>
                                <li key={link.key}><a href={getUrl(item.linkBlockTag, link.linkUrl.slug)}>{link.linkTitle}</a></li>
                            ) 
                        )
                    }
                    </ul>
                </div>
            )}
        </div>
    )
}
