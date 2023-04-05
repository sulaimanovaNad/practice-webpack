import { useState } from "react"
import classes from './Counter.module.scss'


export const Counter =  () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div className={classes.wrapper}>
            <span>{count}</span>
            <button className={classes.btn} onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter