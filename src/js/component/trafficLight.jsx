import React, {useState} from "react";


const TrafficLight = ()=> {

    const [ selectedColor, setSelectedColor ] = useState("null");

    const changeColor = (color)=> {
        setSelectedColor(color);
        
    }

    return (
        
        <div className="container">
            <div className="palito"></div>
            <div className="body-box">
                <div className={`red ${selectedColor == "red" ? "light-on" : ""}`}
                onClick={()=>changeColor("red")}>
                </div>
                <div className={`yellow ${selectedColor == "yellow" ? "light-on" : ""}`}
                onClick={()=>changeColor("yellow")}>
                </div>
                <div className={`green ${selectedColor == "green" ? "light-on" : ""}`}
                onClick={()=>changeColor("green")}>
                </div>
            </div>
            </div>
    )
}
;
export default TrafficLight