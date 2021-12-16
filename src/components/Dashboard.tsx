import React from "react";
import ethereum from '/assets/Ethereum.svg'
import {ValueRate} from "./ValueRate";
import {OrderBook} from "./OrderBook";

export const Dashboard: React.FC = () => {
    //placeholder variables
    let moneyMaker = "";
    let currentBalance = 0;
    const currency = ["EUR", "USD"]
    const usrName = "Matic"

    return (
        <>
            <div className="Dashboard">
                <img src={ethereum} width="100px" height="100px" className="App-logo" alt="logo" />
                <h1>Hello {usrName}!</h1> <p>I am your <b>automated crypto-trading</b> bot.</p>
                {currentBalance === 0 ? (
                    <p>Your current balance is {currentBalance} {currency[0]}. <a><b>Please top up!</b></a></p>
                ) : (
                    <>
                        <p>Your current balance is {currentBalance} {currency[0]}.</p>
                        <p>Your money-maker of the week is {moneyMaker}.</p>
                    </>
                )}
            </div>
            <div className="data">
                <ValueRate />
                <OrderBook />
            </div>
        </>
    )
}