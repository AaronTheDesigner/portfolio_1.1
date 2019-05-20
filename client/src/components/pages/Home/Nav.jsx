import React from 'react';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md fixed-top" id="nav">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">A T</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">Portfolio</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#testimonials" className="nav-link">Testimonials</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
};

export default Nav;