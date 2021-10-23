import React,{ useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { NavLink } from 'react-router-dom'
import {AiOutlineArrowLeft} from "react-icons/all";

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
                <h2>Choisissez un type de commerces</h2>
                <p>La ville d'Antoing propose tout type de commerces, allant de
                    l'alimentaire au confort de votre maison. Faites vos courses
                    près de chez-vous, faites tourner l"économie local.
                </p>
            </div>
        );
    }

    function GetCarousel() {
        return (
            <div className="container">
                <AiOutlineArrowLeft onClick={() => window.history.back()} />
                <Carousel
                    itemsToShow={itemToShowCarou}
                    showArrows={false}
                    pagination={false}
                    enableAutoPlay autoPlaySpeed={6500}
                    className="movieList"
                >
                    <div className="card">
                        <NavLink to="/alimentationDetails" className="title">Alimentation</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/TextileDetails" className="title">textile</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/pharmaciedetails" className="title">Pharmacie</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/boulangeriedetails" className="title">Boulangerie</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/soinsDetails" className="title">Soins du corps</NavLink>
                    </div>
                    <div className="card">
                        <NavLink to="/librairieDetails" className="title">Librairie</NavLink>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Commerces
