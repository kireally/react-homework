import React, { useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <button onClick={plus}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>    
        </div>
    )
}
export default Counter
