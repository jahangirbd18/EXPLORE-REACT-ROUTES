import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (        
    <div className='header'> 
    <nav>           
    <NavLink className={({isActive})=>isActive ? 'active':undefined} to='/home'>Home By Link</NavLink>    
    <NavLink className={({isActive})=>isActive ? 'active':undefined}to='/products'>Products By Link</NavLink>
    <NavLink className={({isActive})=>isActive ? 'active':undefined}to='/friends'>Friends</NavLink>
     <NavLink className={({isActive})=>isActive ? 'active':undefined}to='/posts'>Posts</NavLink>

    <Link to='/about'>About By Link</Link>
    </nav>
    <h3>Common Header</h3>
     </div>
    );
};
export default Header;