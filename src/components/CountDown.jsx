import React, { useEffect, useState } from "react";
import "./CountDown.css"
const CountDown = () => {
    const [timeCount, setTimeCount] = useState(0);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const input = Math.floor(Number(e.target.value));
            if (isNaN(input)) {
                setTimeCount(0)
            }
            else {
                setTimeCount(input)
            }
        }

    }
    useEffect(() => {
        let intervalId;
        if (timeCount > 0) {
            intervalId = setInterval(() => {
                setTimeCount((prevTime) => prevTime - 1)
            }, 1000);
        }
        else {
            setTimeCount(0)
        }
        return () => clearInterval(intervalId)
    }, [timeCount])


    return (
        <center>
            <input type="number" id='timeCount' onKeyDown={handleKeyDown}/>
            <div id="current-time">{timeCount}</div>
        </center>
    )
}
export default CountDown;