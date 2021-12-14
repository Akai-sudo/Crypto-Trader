import './App.css'
import React from 'react'

import Dashboard from "./components/Dashboard";
import ValueRate from "./components/ValueRate";

function App() {
    return(
        <div className="app">
            <Dashboard/>
            <ValueRate/>
        </div>
    )
}
export default App

