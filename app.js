import React, { useState } from 'react';
import './app.css';

function app() {
    const [count, setCount] = useState(0);

    // Handlers
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="app">
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default app;
