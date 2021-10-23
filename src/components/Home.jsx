import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/Home.css'

const Home = () => {
    return (
        <div className="linkDiv">
            <p className="intro">Découvrez nos services locaux</p>
            <div className="linkGroup">
            <Link className="commerces" to="/commerces">Commerces</Link>
            <Link className="commerces" to="/restaurants">Restaurants</Link>
            </div>
        </div>
    )
}

export default Home
