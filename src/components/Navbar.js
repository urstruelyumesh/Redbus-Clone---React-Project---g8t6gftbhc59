import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav id='navb' className='navbar fixed-top navbar-expand-xl' style={{backgroundColor: 'black',color:"whitesmoke"}} >
            <Link to="./MainPage">
                <img className='logo' src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="Logo" height={50} />
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon haha px-2 py-3" style={{backgroundColor :"#d74f57",borderRadius:'30%',border:'1px solid'}}></span>
            </button>

            <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li  className="nav-item active mx-5">
                        <Link style={{textDecoration: 'none'}} to='/MainPage'>  <a className="nav-link haha" style={{color:"whitesmoke"}} href="#">Home </a></Link>
                    </li>
                    
                    <li  className="nav-item mx-2">
                        <Link style={{textDecoration: 'none'}} to='/BusListPage'> <a className="nav-link haha" style={{color:"whitesmoke"}} href="#">Available Buses</a></Link>
                    </li>
                        
                    <li  className="nav-item dropdown mx-3" >
                        <a className="nav-link" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="navbar-toggler-icon haha" style={{backgroundColor :"#d74f57",borderRadius:'30%',border:'1px solid'}}  ></span>
                             </a>
                       
                        <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
                            <a className="dropdown-item haha" href="#">MyBookings(comingsoon)</a>
                            <a className="dropdown-item haha" href="#">CancelBookings(comingsoon)</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item haha" href="#">Transactions</a>
                        </div>
                    </li>

                    
                </ul>
                <div className='nav-item'><a className='nav-link haha px-3 py-1' href='#'>Login</a></div>
            </div>
        </nav >
    );
}
export default Navbar;