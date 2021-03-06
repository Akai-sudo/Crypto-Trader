import React, { useEffect, useState } from "react"
import set = Reflect.set;

export const ValueRate: React.FC = () => {
    const [priceBTC, setPriceBTC] = useState()
    const [priceETH, setPriceETH] = useState()
    const [priceALGO, setPriceALGO] = useState()
    const [priceXRP, setPriceXRP] = useState()

    const [error, setError] = useState(false)
    const [loaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://localhost:3000/api/ticker/btceur")
                .then(res => res.json())
                .then(data => {setPriceBTC(data.last); setIsLoaded(true);})
                .catch(e => {console.log(e); setError(e);})

            fetch("http://localhost:3000/api/ticker/etheur")
                .then(res => res.json())
                .then(data => {setPriceETH(data.last); setIsLoaded(true);})
                .catch(e => {console.log(e); setError(e);})

            fetch("http://localhost:3000/api/ticker/algoeur")
                .then(res => res.json())
                .then(data => {setPriceALGO(data.last); setIsLoaded(true);})
                .catch(e => {console.log(e); setError(e);})
            fetch("http://localhost:3000/api/ticker/xrpeur")
                .then(res => res.json())
                .then(data => {setPriceXRP(data.last); setIsLoaded(true);})
                .catch(e => {console.log(e); setError(e)})
        }, 1000, true)

        return (()=> clearInterval(interval))
    }, [])

    if (!loaded) {
        return (
            <p>loading..</p>
        )
    }
    return (
        <div className="valueRate">
            <h2>Current crypto prices: </h2>
            <p>Current Ethereum value is: {priceETH}EUR</p>
            <p>Current Bitcoin value is: {priceBTC}EUR</p>
            <p>Current Algorand value is: {priceALGO}EUR</p>
            <p>Current Ripple value is: {priceXRP}EUR</p>
        </div>
    )
}

