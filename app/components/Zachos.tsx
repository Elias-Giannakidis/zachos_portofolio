import React, {useState} from 'react'

export function Zachos(){

    const [isHovered, setIsHovered] = useState(false)

    const style = {
        "borderRadius": isHovered ? "60% 40% 80% 40%" : "10% 20% 100% 20%",
        "width": "30%",
        "height": "30%",
        "boxShadow": isHovered ? "7px 7px 20px" : "5px 5px 30px",
        "transform": isHovered ? "rotate(20deg) scale(0.8)" : "rotate(0deg) scale(1)",
        "transition": "box-shadow 0.6s ease, transform 3s ease, border-radius 3s ease",
    }

    return(
        <img 
            src="../images/zachos.jpg" 
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ></img>
    )
}