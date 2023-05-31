import ReactLogo from '../images/React-icon.png';

function NavigationBar(){
    return(
        <nav className='navigation'>   
            <div className='react-logo-box'>
                <img src={ReactLogo} className='react-logo' />
                <p className='react-logo-text'>ReactFacts</p>
            </div>
            <div>
                <ul className='nav-list'>
                    <li>Courses</li>
                    <li>Plans</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;