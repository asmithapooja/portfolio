import React from 'react';
import {Link} from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className = "container">
                <a className="navbar-brand" href="#">Pooja Govindasami</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" aria-current="page" to = "homescroll" smooth = {true} duration = {2000}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "aboutscroll" smooth = {true} duration = {2000}>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "projectscroll" smooth = {true} duration = {2000}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "contactscroll" smooth = {true} duration = {2000}>Contact</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
};

export default Navbar;
