import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (        
    <div className='header'> 
    <nav>           
    <Link to='/home'>Home By Link</Link>    
    <Link to='/products'>Products By Link</Link>
    <Link to='/friends'>Friends</Link>
    <Link to='/about'>About By Link</Link>
    </nav>
    <h3>Common Header</h3>
     {/* < a href="/Home">Home By Anchor</a>
         < a href="/About">About By Anchor</a> */}
        </div>
    );
};
export default Header;