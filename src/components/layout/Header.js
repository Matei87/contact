import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Header.css';


let Header = (props) => {
    let { branding } = props;

        return (
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <a href="/" className="navbar-brand">{branding}</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                  <i className="fas fa-home" />   Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact/add" className="nav-link">
                                  <i className="fas fa-plus" /> Add
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                  <i className="fas fa-question" /> About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};

// Navbar.defaultProps = {
//     branding: 'Contact Manager'
// };

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// let headingStyle = {
//     color: 'red',
//     background: '#333',
//     fontSize: '4rem',
//     textAlign: 'center',
//     padding: '1rem 0'
// };

export default Header;