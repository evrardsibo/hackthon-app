import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all";

const RestaurantDetails = () => {
    return (
        <div>
            <AiOutlineArrowLeft onClick={() => window.history.back()} />
            restaudetail
        </div>
    )
}

export default RestaurantDetails
