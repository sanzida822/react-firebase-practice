import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import app from '../../firebase/firebase.init';

const Header = () => {
    const auth = getAuth(app);
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;