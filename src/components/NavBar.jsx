import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RiCommunityLine } from 'react-icons/ri';
import { BsBinoculars } from 'react-icons/bs';
import { BsLightbulb } from 'react-icons/bs';
import { IconContext } from 'react-icons/'

const NavBar = () => {
    let icons = { className: 'icons' }

    return (
        <header>
            <nav className="menu">
                <NavLink to='/'>
                    <IconContext.Provider value={ icons }><AiOutlineHome /></IconContext.Provider>
                </NavLink>
                <NavLink to='/admin'>
                    <IconContext.Provider value={ icons }><RiCommunityLine /></IconContext.Provider>
                </NavLink>
                <NavLink to='/discover'>
                    <IconContext.Provider value={ icons }><BsBinoculars /></IconContext.Provider>
                </NavLink>
                <NavLink to='/inspiration'>
                    <IconContext.Provider value={ icons }><BsLightbulb /></IconContext.Provider>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar
