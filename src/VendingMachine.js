import React from "react";
import { Link } from 'react-router-dom'
const VendingMachine = () => {
    return (
        <div className="vendingmachine">
            <p> I am a vending machine! </p>
            <p> What would you like to purchase? </p>
            <Link to='/chips'>Chips</Link>
            <Link to='/candybar'>Candy Bar</Link>
            <Link to='/pretzels'>Pretzels</Link>
        </div>
    )
}

export default VendingMachine;