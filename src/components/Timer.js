import React, {useState, useEffect} from 'react'

function Timer(){
    const [date,setDate] = useState(new Date());
    const [intervalId,setIntervalId] = useState(null)

    useEffect(()=>{
        setIntervalId(setInterval(() => {
            setDate(new Date())
        }, 1000))
    },[])

    const resume = ()=>{
        setIntervalId(setInterval(() => {
            setDate(new Date())
        }, 1000))
    }

    const stopTimer = ()=>{
        clearInterval(intervalId);
    }

    return(
        <div>
            <p className="timer">{date.toLocaleTimeString()}</p>
            <p >Welcome!</p>
            <a class="waves-effect waves-light btn-large button" onClick={stopTimer}>Stop Timer</a>
            <a class="waves-effect waves-light btn-large button" onClick={resume}>Resume</a>
        </div>
    )
}

export default Timer;