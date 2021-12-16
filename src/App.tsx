import './App.css'
import React from 'react'
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="app">
            <NavigationBar />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default App

