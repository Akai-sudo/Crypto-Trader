import React, { useState } from "react";
import { useEffect } from "react";
import { Ticker } from "../api/types";

export const OrderBook: React.FC = () => {
    const [ticker, setTicker] = useState<Ticker | null>(null)
    const ws = new WebSocket('wss://ws.kraken.com')

    useEffect(() => {
        ws.onopen = () => {
            ws.send(JSON.stringify(
                {
                    "event": "subscribe",
                    "pair": [
                        "ETH/EUR"
                    ],
                    "subscription": {
                        "name": "ticker"
                    }
                }
            ))
        }

        ws.onmessage = (msg) => {
            const json = JSON.parse(msg.data)

            try {
                if (json.event !== "heartbeat") {
                    setTicker(json[1])
                    console.log(json)
                }
            } catch (err) {
                console.log(err);
            }
        }

        ws.onclose = () => {
            console.log('connection closed')
        }

        return () => { ws.close() }
    }, [])


    return (
        <div>
            <h2>ETH/EUR</h2>
            <table>
                <thead>
                    <tr>
                        <th>Ask</th>
                        <th>Bid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ticker?.a[0]}</td>
                        <td>{ticker?.b[0]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}