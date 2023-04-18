import React from "react";

export default function Hero(props) {

    

    function getRandomPassword() {
        let password = []
        for (let i=0; i<10; i++) {
            password.push(props.characters[getRandomNumber()])
        }

        return password.join('')
    }

    function getRandomNumber() {
        let randomNumber = ''
        return randomNumber = Math.floor(Math.random() * props.characters.length) 
    }

    console.log(getRandomPassword())

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