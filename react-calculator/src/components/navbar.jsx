import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
          Calculate
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                Calculator
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/history'>
                History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
