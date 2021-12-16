import React, { useEffect, useState } from "react"

export const ValueRate: React.FC = () => {
    const [priceBTC, setPriceBTC] = useState()
    const [priceETH, setPriceETH] = useState()
    const [priceALGO, setPriceALGO] = useState()

    const [error, setError] = useState(false)
    const [loaded, setIsLoaded] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/api/ticker/btceur")
            .then(res => res.json())
            .then(data => setPriceBTC(data.last))
            .catch(e => {console.log(e); setIsLoaded(false); setError(e);})

        fetch("http://localhost:3000/api/ticker/etheur")
            .then(res => res.json())
            .then(data => setPriceETH(data.last))
            .catch(e => {console.log(e); setIsLoaded(false); setError(e);})

        fetch("http://localhost:3000/api/ticker/algoeur")
            .then(res => res.json())
            .then(data => setPriceALGO((data.last)))
            .catch(e => {console.log(e); setIsLoaded(false); setError(e);})
    }, [])

    return (
        <div className="valueRate">
            <h2>Current crypto prices: </h2>
            <p>Current Ethereum value is: {priceETH}EUR</p>
            <p>Current Bitcoin value is: {priceBTC}EUR</p>
            <p>Current Algorand value is: {priceALGO}EUR</p>
        </div>
    )
}

