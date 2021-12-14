import './App.css'
import React, {useState} from 'react'

import Dashboard from "./components/Dashboard";
import ValueRate from "./components/ValueRate";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
    return(
        <>
            <div className="navBar">
                <NavigationBar/>
            </div>

            <div className="app">
                <Dashboard/>
                <ValueRate/>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </>
    )
}
export default App

