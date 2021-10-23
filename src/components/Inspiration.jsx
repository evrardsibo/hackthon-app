import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div>
            <button>En manque d'inspiration ?</button>
            <div className="container">
                <div className="divOne">
                    <Link to="/restau">Restaurant</Link>
                    <Link to="/loisir">Loisir</Link>
                    <Link to="/evenements">Évènement</Link>
                </div>
                <div className="divTwo">
                    <Link to="/sport">Sport</Link>
                    <Link to="/art">Art</Link>
                    <Link to="/commerces">Commerce</Link>
                </div>
            </div>            
        </div>
    )
}

export default Discover
