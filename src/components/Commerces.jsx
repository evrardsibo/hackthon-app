import React,{ useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { NavLink } from 'react-router-dom'
import {AiOutlineArrowLeft} from "react-icons/all";
import '../assets/scss/Comm.css'

const Commerces = () => {
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
                <p className="title">Choisissez un type de commerce</p>
                <p>La ville d'Antoing propose tout type de commerces, allant de
                    l'alimentaire au confort de votre maison. Faites vos courses
                    près de chez vous et contribuez à l'épanouissement de l'économie local.
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
