import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all";

const LibrairieDetails = () => {
    return (
        <div>
            <AiOutlineArrowLeft onClick={() => window.history.back()} />

            lib
        </div>
    )
}

export default LibrairieDetails
