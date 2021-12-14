import React, {useState} from "react";
import ethereum from '../Ethereum.svg'

function Dashboard() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <header className="App-header">
                <img src={ethereum} className="App-logo" alt="logo" />
                <p>Hello! I am your <b>automated crypo-trading</b> bot.</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default Dashboard