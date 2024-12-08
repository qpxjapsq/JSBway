import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <dvi>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count +1)}>Increase</button>
        </dvi>
    )
}

export default Counter;