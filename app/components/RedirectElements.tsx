import React, {useState} from 'react'
import {Colors} from "../constants/Colors"

interface IconProps {
    url: string,
    img: string,
    width: string,
    color: string,
    text: string,
}

export function Icon(props: IconProps){

    const [isHovered, setIsHovered] = useState(false)

    const imageStyle = {
        "width": "80px",
        "borderRadius": "20%",
        "cursor": `url(../images/tattoo-machine.png) , auto`,
        "transform": isHovered ? "rotate(20deg) scale(1.07)" : "rotate(5deg) scale(1)",
        "boxShadow": isHovered ? "5px 5px 40px 0px" : "0px 0px 0px 0px",
        "transition": "transform 0.8s ease, box-shadow 0.8s ease"
    }

    const divStyle = {
        "width": props.width,
        "height": "10%",
        "backgroundColor": props.color,
        "borderRadius": "0px 20px 20px 0px",
        "display": "flex",
        "justifyContent": "flex-end",
        "cursor": "url(../images/tattoo-machine.png) , auto",
    }

    return (
        <a 
        href={props.url}
        >
            <div style={divStyle}>
                <p>{props.text}</p>
                <img src={props.img} style={imageStyle}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 ></img>
            </div>
        </a>
    )
}

export function InstagramIcon(){
    return(
        <Icon 
            url={'https://www.instagram.com/zachosink/'} 
            img={'../images/instagram.png'} 
            width={'40%'} 
            color={Colors.yellow}
            text={'This is the instagram'}        
        />
    )
}

export function FacebookIcon(){
    return(
        <Icon 
            url={'https://www.facebook.com/zachosink'} 
            img={'../images/facebook.png'} 
            width={'30%'} 
            color={Colors.gray}
            text={'This is the facebook'}        
        />
    )
}

export function DriveIcon(){
    return(
        <Icon 
            url={'https://drive.google.com/drive/folders/1wg52quRovXO4OrCq-HOIWGfShbhSVWjx'} 
            img={'../images/google-drive.png'} 
            width={'20%'} 
            color={Colors.green}
            text={'This is the google drive'}        
        />
    )
}