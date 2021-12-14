import './App.css'
import React from 'react'
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import { ValueRate } from './components/ValueRate';
import { Footer } from './components/Footer';
import { OrderBook } from './components/OrderBook';


function App() {
    return (
        <div className="app">
            <NavigationBar />

            <Dashboard />
            <ValueRate />
            <OrderBook />

            <Footer />
        </div>
    )
}

export default App

