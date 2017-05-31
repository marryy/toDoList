import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routes } from '../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
        <div className='Menu-links'>
          <IndexLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routes.DASHBOARD }
          >
            Home
          </IndexLink>
          <Link
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routes.ABOUT }
          >
            About
          </Link>
        </div>
      </div>
    );
  }
}
