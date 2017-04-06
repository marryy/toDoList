import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
      <header>
        <nav>
            <ul>
                <li className="nav-item" activeClassName="active"><IndexLink to="/">Home</IndexLink></li>
                <li className="nav-item" activeClassName="active"><Link to="/about">About</Link></li>
            </ul>
        </nav>
      </header>


  );
};

export default Header;
