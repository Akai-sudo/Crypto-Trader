import React from "react"

export const NavigationBar: React.FC = () => {
    return (
        <div className="navBar">
            <h1><b>GoCrypto</b></h1>
            <div>
                <p><b>LOGIN</b></p>
                <p><b>REGISTER</b></p>
                <p><b>ABOUT US</b></p>
            </div>
        </div>
    )
}