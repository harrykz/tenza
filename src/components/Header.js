import NavLogo from '../images/React-icon.png';


function Header(){
    return(
        <nav className='nav-bar'>
            <img src={NavLogo} className="nav-logo" />
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Plans</li>
            </ul>
        </nav>
    )
}

export default Header;