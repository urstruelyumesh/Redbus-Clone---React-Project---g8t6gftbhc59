import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav id='navb' className="navbar navbar-expand-xl navbar-light bg-light">
            <Link to="/MainPage">
                <img src="https://dog55574plkkx.cloudfront.net/storelogo/web/Red-Bus.png" alt="Logo" height="50" />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li id='home' className="nav-item active">
                        <Link style={{textDecoration: 'none'}} to='/MainPage'>  <a className="nav-link" href="#">Home </a></Link>
                    </li>
                    <li id='buslistpage' className="nav-item">
                        <Link style={{textDecoration: 'none'}} to='/BusListPage'> <a className="nav-link" href="#">Available Buses</a></Link>
                    </li>

                    <li  className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <svg id='dropdownicon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20"><path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path></svg>
                             </a>
                        
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">MyBookings(comingsoon)</a>
                            <a className="dropdown-item" href="#">CancelBookings(comingsoon)</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Transactions</a>
                        </div>
                    </li>


                </ul>
            </div>
        </nav >
    );
}
export default Navbar;