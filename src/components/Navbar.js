import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
           <nav className="navbar navbar-dark bg-primary">
               <div className="container">
                <link to="/" className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                </link>
               </div>
               <div className='collapse navbar-collapse'>
                   <ul className='navbar-nav ml-aouto'>
                       <li className='nav-item'>
                           <Link to="about" className="nav-link">About</Link>
                       </li>

                   </ul>
               </div>
           </nav>
        )
    }
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
