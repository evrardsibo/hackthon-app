import { Link } from 'react-router-dom';

const Discover = () => {
    return (
        <div>
            <button>En manque d'inspiration ?</button>
            <div className="container">
                <div className="divOne">
                    <Link to="/">Restaurant</Link>
                    <Link to="/">Loisir</Link>
                    <Link to="/">Évènement</Link>
                </div>
                <div className="divTwo">
                    <Link to="/">Sport</Link>
                    <Link to="/">Art</Link>
                    <Link to="/">Commerce</Link>
                </div>
            </div>            
        </div>
    )
}

export default Discover
