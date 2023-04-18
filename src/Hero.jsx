import React from "react";

export default function Hero(props) {

    console.log(props.characters.length)

    function getRandomPassword() {
        for (i=0; i<10; i++) {
            
        }
    }

    function getRandomNumber() {
        let randomNumber = ''
        return randomNumber = Math.floor(Math.random() * props.characters.length) 
    }

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