import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <Link to="/current-time"><li>Current Time</li></Link>
                <Link to="/alarm"><li>Alarm</li></Link>
                <Link to="/stopwatch"><li>Stopwatch</li></Link>
                <Link to="/world-times"><li>World Times</li></Link>
            </nav>
        </div>
    );
};

export default Navbar;
