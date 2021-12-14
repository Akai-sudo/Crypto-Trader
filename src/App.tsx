import './App.css'
import React from 'react'
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import { ValueRate } from './components/ValueRate';
import { Footer } from './components/Footer';


function App() {
    return (
        <div className="app">
            <NavigationBar />

            <Dashboard />
            <ValueRate />

            <Footer />
        </div>
    )
}

export default App

