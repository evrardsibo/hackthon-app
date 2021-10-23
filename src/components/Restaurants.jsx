import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Carousel from 'react-elastic-carousel'


const Restaurants = () => {
    const [itemToShowCarou, setItemToShowCarou] = useState(1)
    return (
        <main>
            <MoreInfo />
            <GetCarousel />
        </main>
    )

    function MoreInfo() {
        return (
            <div className="infoContainer">
                Choisissez un type de restauration
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
                    className="movieList"
                >
                    <div className="card">
                        <NavLink to="/" className="title">Cafe / Brasseries</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">Snack / Friteries</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">Restaurants</NavLink>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Restaurants
