import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(){
    return (
        <div className='navbar'>
            <ul>
                <li><Link to='/search'>Search Posts</Link></li>
            </ul>
            <ul>
                <li>
                    <Link to="/">Get Posts</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/create">Send Posts</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/update">Modify  Posts</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/delete">Delete  Posts</Link>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;