import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/first">First</Link>
    </li>
    <li>
      <Link to="/second">Second</Link>
    </li>
    <li>
      <Link to="otherPage">Other page</Link>
    </li>
  </ul>
);

export default Header;
