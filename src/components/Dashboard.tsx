import React from "react";
import ethereum from '/assets/Ethereum.svg'

export const Dashboard: React.FC = () => {
    //placeholder variables
    let moneyMaker = NaN;
    let currentBalance = 0;
    const currency = ["EUR", "USD"]
    const usrName = "Matic"

    if(currentBalance == 0) {
        return (
        <div className="Dashboard">
            <img src={ethereum} width="100px" height="100px" className="App-logo" alt="logo" />
            <h1>Hello {usrName}!</h1> <p>I am your <b>automated crypto-trading</b> bot.</p>
            <p>Your current balance is {currentBalance} {currency[0]}. <a><b>Please top up!</b></a></p>
        </div>
        )
    }

    return (
        <div className="Dashboard">
            <img src={ethereum} width="100px" height="100px" className="App-logo" alt="logo" />
            <h1>Hello {usrName}!</h1> <p>I am your <b>automated crypto-trading</b> bot.</p>
            <p>Your current balance is {currentBalance} {currency[0]}.</p>
            <p>Your money-maker of the week is {moneyMaker}.</p>
        </div>
    )
}