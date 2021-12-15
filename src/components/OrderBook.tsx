import React, { useState } from "react";
import { useEffect } from "react";


// interface data {
//     timestamp: string;
//     microtimestamp: string;
//     bids: string[][];
//     asks: string[][];
// }

export const OrderBook: React.FC = () => {
    const [asks, setAsks] = useState([])
    const [bids, setBids] = useState([])

    useEffect(() => {
        const ws = new WebSocket('wss://ws.bitstamp.net')
        ws.onopen = () => {
            ws.send(JSON.stringify(
                {
                    event: 'bts:subscribe',
                    data: { channel: 'order_book_btcusd' },
                }
            ))
        }

        ws.onmessage = (msg) => {
            const json = JSON.parse(msg.data)

            try {
                if (json.event === "data") {
                    setAsks(json.data.asks.slice(0, 10))
                    setBids(json.data.bids.slice(0, 10))
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
                    {asks.map((ask, i) => (
                        <tr key={i}>
                            <td>{ask[0]}</td>
                            <td>{bids[i] && bids[i][0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}