import React from "react";
import ethereum from '/assets/Ethereum.svg'

export const Dashboard: React.FC = () => {
    return (
        <div className="Dashboard">
            <img src={ethereum} width="30%" height="30%" className="App-logo" alt="logo" />
            <p>Hello! I am your <b>automated crypto-trading</b> bot.</p>
            <p>Your current balance: 0$</p>
            <p>Your money-maker of the week: </p>
        </div>
    )
}