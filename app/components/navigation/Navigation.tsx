
import {Colors} from "../../constants/Colors"

const theme = {
    "width": "100%",
    "height": "20%",
    "min-height": "100px",
    "max-height": "400px",
    "background-color": Colors.foreground,
    "color": Colors.foreground,
}
export function Navigation(){
    return (
        <div style={theme}></div>
    )
}