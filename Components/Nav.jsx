import React from 'react';
import "./nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h2>ΉЯMD Careers</h2>
            <div>
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <Link to="#">Login</Link>
                    <div className="dropdown-content">
                        <Link to="/login/candidate">Candidate</Link>
                        <Link to="/login/employee">Employee</Link>
                        <Link to="/login/admin">Admin</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="#">Register</Link>
                    <div className="dropdown-content">
                        <Link to="/register/candidate">Candidate</Link>
                        <Link to="/register/employee">Employee</Link>
                        <Link to="/register/admin">Admin</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;