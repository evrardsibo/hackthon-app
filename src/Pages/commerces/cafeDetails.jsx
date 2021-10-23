import React from 'react'
import {NavLink} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/all";

const CafeDetails = () => {
    return (
        <div>
            <AiOutlineArrowLeft onClick={() => window.history.back()} />
            cafe
        </div>
    )
}

export default CafeDetails
