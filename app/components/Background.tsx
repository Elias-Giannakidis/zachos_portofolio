import {Colors} from "../constants/Colors"
import React, {useState} from 'react'

export function Background() {

    const [isHovered, setIsHovered] = useState(false)

    const imageStyle = {
        "width": "100%",
        "height": "100%",
        "backgroundImage": "url(../images/background.jpg)",
        "alignItems": "center",
        "display": "flex",
        "justifyContent": "center",
    }

    const foregroundStyle = {
        "width": "94%",
        "height": "94%",
        "background": `radial-gradient(circle, ${Colors.white} 0%, ${Colors.white} 30%, ${Colors.gray} 100%)`,
        "borderRadius": "10px",
        "borderWidth": "8px",
        "boxShadow": isHovered ? "0px 0px 50px 30px" : "0px 0px 30px 20px",
        "transform": isHovered ? 'scale(1.01)' : 'scale(1)',
        "transition": "box-shadow 0.6s ease, transform 0.6s ease"
    }


    return (
        <div style={imageStyle}>
            <div 
                style={foregroundStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ></div>
        </div>
    )
}