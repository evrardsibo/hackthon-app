import React,{ useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { NavLink } from 'react-router-dom'

const Commerces = () => {
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
                Choisissez un type de commerces
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
                        <NavLink to="/" className="title">Alimentation</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">textile</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">Pharmacie</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">Boulangerie</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">Soins du corps</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/" className="title">Librairie</NavLink>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Commerces
