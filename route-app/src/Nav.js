import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    const navStyle ={
        color:'black'
    };
    return (
        <>
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to='/about'>
                        <li>About</li>
                    </Link>
                    <Link style={navStyle} to='/shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
}
export default Nav;