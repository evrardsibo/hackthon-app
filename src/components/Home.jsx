import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/Home.css'

const Home = () => {
    return (
        <div>
            <p className="intro">Découvrez nos services locaux:</p>
            <Link className="commerces" to="/commerces">Commerces</Link>
            <Link className="commerces" to="/restaurants">Restaurants</Link>
        </div>
    )
}

export default Home
