import React, {useState} from "react";
import ethereum from '../Ethereum.svg'

function Dashboard() {
    const [count, setCount] = useState(0)

    return (
        <div className="Dashboard">
            <header className="App-header">
                <img src={ethereum} width="30%" height="30%" className="App-logo" alt="logo" />
                <p>Hello! I am your <b>automated crypto-trading</b> bot.</p>
                <p>Your current balance: 0$</p>
                <p>Your money-maker of the week: </p>
            </header>
        </div>
    )
}

export default Dashboard