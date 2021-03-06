import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
        // Add a click event on each of them
        navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const targetEl = document.getElementById(target);
                // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                targetEl.classList.toggle('is-active');
            });
        });
    }
});

const Navbar = () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img alt={'logotipo'} src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>
            <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" to='/blog'> Blog </Link>          
                <Link className="navbar-item" to='/humoristico'> Humorístico </Link>          
                <Link className="navbar-item" to='/filosofico'> Filosófico </Link>         
                </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <Link className="button is-primary" to='/'>
                       <FaTwitter />
                    </Link>                                
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar;