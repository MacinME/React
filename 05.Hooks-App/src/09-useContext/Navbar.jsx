import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink 
                        to="/about"
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contacts"
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }` }
                    >
                        Contacts
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
