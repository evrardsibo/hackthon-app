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
                <h2>Choisissez un type de restauration</h2>
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
                    enableAutoPlay autoPlaySpeed={3500}
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
