import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/current-time">Current Time</Link></li>
        <li><Link to="/stopwatch">Stopwatch</Link></li>
        <li><Link to="/alarm">Alarm</Link></li>
        <li><Link to="/world-times">World Clock</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
