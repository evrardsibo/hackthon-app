import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all";

const SoinsDetails = () => {
    return (
        <div>
            <AiOutlineArrowLeft onClick={() => window.history.back()} />

            soins
        </div>
    )
}

export default SoinsDetails
