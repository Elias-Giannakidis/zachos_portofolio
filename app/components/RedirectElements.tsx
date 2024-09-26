import React, {useState} from 'react'

const imageStyle = {
    "width": "80px",
    "transform": "rotate(5deg)",
    "borderRadius": "20%",
    "cursor": "url(../images/tattoo-machine.png) , auto",
    "transition": "transform 0.8s ease, box-shadow 0.8s ease"
}

const imageStyleHovered = {
    ...imageStyle,
    "transform": "rotate(20deg) scale(1.07)",
    "boxShadow": "5px 5px 40px 0px",
    

}

export function InstagramIcon(){

    const [isHovered, setIsHovered] = useState(false)

    return (
        <a 
        href="https://www.instagram.com/zachosink/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src="../images/instagram.png" style={isHovered? imageStyleHovered : imageStyle}></img>
        </a>
    )
}

export function FacebookIcon(){

    const [isHovered, setIsHovered] = useState(false)

    return (
        <a 
        href="https://www.facebook.com/zachosink"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src="../images/facebook.png" style={isHovered? imageStyleHovered : imageStyle}></img>
        </a>
    )
}

export function DriveIcon(){

    const [isHovered, setIsHovered] = useState(false)

    return (
        <a 
        href="https://drive.google.com/drive/folders/1wg52quRovXO4OrCq-HOIWGfShbhSVWjx"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src="../images/google-drive.png" style={isHovered? imageStyleHovered : imageStyle}></img>
        </a>
    )
}