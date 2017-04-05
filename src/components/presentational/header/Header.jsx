import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
      <header>
        <nav>
            <ul>
                <li className="nav-item"><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li className="nav-item"><Link to="/about" activeClassName="active">About</Link></li>
            </ul>
        </nav>
      </header>


  );
};

export default Header;
