import React, { useEffect, useState } from "react"

export const ValueRate: React.FC = () => {
    const [priceBTC, setPriceBTC] = useState()
    const [priceETH, setPriceETH] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/api/ticker/btceur")
            .then(res => res.json())
            .then(data => setPriceBTC(data.last))

        fetch("http://localhost:3000/api/ticker/etheur")
            .then(res => res.json())
            .then(data => setPriceETH(data.last))
    }, [])

    return (
        <div className="valueRate">
            <h2>Real-time crypto fluctuations: </h2>
            <p>Current Ethereum value is: {priceETH} EUR</p>
            <p>Current Bitcoin value is: {priceBTC} EUR</p>
        </div>
    )
}

