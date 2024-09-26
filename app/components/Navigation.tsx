
import {Colors} from "../../constants/Colors"

const theme = {
    "width": "100%",
    "height": "20%",
    "minHeight": "100px",
    "maxHeight": "400px",
    "background-color": Colors.yellow,
}

const theme2 = {
    "width": "100%",
    "height": "20%",
    "minHeight": "100px",
    "maxHeight": "400px",
    "background-color": Colors.green,
}

const theme3 = {
    "width": "100%",
    "height": "20%",
    "minHeight": "100px",
    "maxHeight": "400px",
    "background-color": Colors.white,
    "textColor": Colors.black
}

export function Navigation(){
    return (
        <>
        <div style={theme}></div>
        <div style={theme2}></div>
        <p style={theme3}> Test </p>
        </>
    )
}