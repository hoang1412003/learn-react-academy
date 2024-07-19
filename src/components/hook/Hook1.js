import { useState } from "react"

function Hook1() {
    const [count, setCount] = useState(1)
    function handle_count_up() {
        setCount(count+1)
    }
    return(
        <div>
            <h1>tìm hiểu useState</h1>
            <p>count: {count}</p>
            <button onClick={handle_count_up}>Count up</button>
        </div>
    )
}
export default Hook1;