import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>Leon</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Download</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button">Login</button>
            </div>
        </div>
    );
}
export default Header;