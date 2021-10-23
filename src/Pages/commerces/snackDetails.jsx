import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all";

const SnackDetails = () => {
    return (
        <div>
            <AiOutlineArrowLeft onClick={() => window.history.back()} />
            snack
        </div>
    )
}

export default SnackDetails
