import React, {useState} from "react";
import ethereum from '../Ethereum.svg'

function Dashboard() {
    const [count, setCount] = useState(0)

    return (
        <div className="Dashboard">
            <header className="App-header">
                <img src={ethereum} width="30%" height="30%" className="App-logo" alt="logo" />
                <p>Hello! I am your <b>automated crypto-trading</b> bot.</p>
                <p>Your balance: </p>

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