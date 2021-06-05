import './AboutMe.css';
import Image from '../Image/Image.js'
import React from 'react';



function AboutMe({imglink}) {

    const AboutMeDescriptionPart1 = `Alvin has spent the better part of the last twenty years being
    amazed by technology. At age 4, he turned on his first computer, a large Hewlett Packard PC attached to a CRT monitor. 
    Onlooking spectators say the look of wonder that appeared on his face 
    still hasn't gone away.`

    const AboutMeDescriptionPart2 = `Twenty-ish years down the road, he's still turning on new things everyday. He's made
    all kinds of things ranging from apps and websites to robots and circuit boards. Unfortunately, he's also destroyed
    a couple of tablets, a few appliances, and one raspberry pi. For now. We can only hope.`
    
    const AboutMeDescriptionPart3 = `Currently, he is an aspiring software engineer in university who's just interested 
    in doing his best and making an impact - with style. Peek below to learn more about this curious chap. `

    return(
        <div className="AboutMe">
            <Image className={"AboutMeImage"} imglink={imglink} />
            <div className="AboutMeInfo">
                <h2 className="AboutMeHeading">ABOUT ME</h2>
                <p className="AboutMeSubheading">
                    <p>
                        {AboutMeDescriptionPart1}
                    </p>
                    <p>
                        {AboutMeDescriptionPart2}
                    </p>
                    <p>
                        {AboutMeDescriptionPart3}
                    </p>
                </p>
            </div>
        </div>
    )
}

export default AboutMe