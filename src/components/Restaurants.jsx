import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Carousel from 'react-elastic-carousel'
import {AiOutlineArrowLeft} from "react-icons/all";
import '../assets/scss/Restau.css'


const Restaurants = () => {
    const [itemToShowCarou, setItemToShowCarou] = useState(1)
    return (
        <main>
            <span className="backArrow"><AiOutlineArrowLeft onClick={() => window.history.back()} /></span>
            <MoreInfo />
            <GetCarousel />
        </main>
    )

    function MoreInfo() {
        return (
            <div className="infoContainer">
                <p className="title">Choisissez un type de restauration</p>
                <p>La ville d'Antoing propose différent type de restauration pour
                    tous les gouts et tous le monde.
                </p>
            </div>
        );
    }

    function GetCarousel() {
        return (
            <div className="container">
                <Carousel
                    itemsToShow={itemToShowCarou}
                    showArrows={false}
                    pagination={false}
                    enableAutoPlay autoPlaySpeed={6500}
                    className="movieList"
                >
                    <div className="card">
                        <NavLink to="/cafedetails" className="title">Cafe / Brasseries</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/snackdetails" className="title">Snack / Friteries</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/restaurantdetails" className="title">Restaurants</NavLink>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Restaurants
