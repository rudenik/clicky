import React from 'react';
import "./navbar.css";

const navbar = props => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Click Clack</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                
            </ul>
            <span className="navbar-text">
               Keep clicking...
    </span>
        </div>
    </nav>
);

export default navbar;