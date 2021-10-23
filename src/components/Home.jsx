import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link className="commerces" to="./commerces">Commerces</Link>
            <Link className="commerces" to="./restaurants">Restaurants</Link>
        </div>
    )
}

export default Home
