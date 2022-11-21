import React from "react";
import { Link } from "react-router-dom";

const CandyBar = () => {
    return (
        <div>
            <p> A wrapped candy bar </p>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default CandyBar;