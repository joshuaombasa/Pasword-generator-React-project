import React from "react";

export default function Hero() {
    return (
        <div className="hero">
            <form action="" className="password-length-form">
                <input 
                type="text"
                className="password-length-input" />
                <button className="submit-btn">Generate Password</button>
            </form>
            <hr />
        </div>
    )
}