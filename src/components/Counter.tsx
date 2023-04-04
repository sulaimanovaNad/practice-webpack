import { useState } from "react"


export const Counter =  () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default Counter

// import { Component } from "react";

// interface CounterState{
//     count:number
// }

// interface CounterProps{

// }

// class Counter extends Component<CounterState,CounterProps> {
//     state = {
//         count: 0
//     }

//     handleClick(): void {
//         this.setState({ count: this.state.count + 1 })
//     }

//     render(): JSX.Element {
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.handleClick}>+</button>
//             </div>
//         )
//     }
// }

// export default Counter