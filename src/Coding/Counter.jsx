import { useState } from "react"

const Counter =()=>{
    const [count, setCount] = useState(0)
    return(
        <>
            <p>This counter is {count}</p>
            <button onClick={()=>setCount(prev => count >= 10 ? 0 : prev +1)}> + </button>
            <button onClick={()=>setCount(prev => count <=0 ? 0 : prev -1)}> - </button>
            <button onClick={()=>setCount(0)}> reset </button>
        </>
    )
}

export default Counter