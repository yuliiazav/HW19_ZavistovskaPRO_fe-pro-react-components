import React from "react";
import {NavItem} from "./NavItem";
import PropTypes from "prop-types";


export const Header = ( {logoText} ) => {
    return <header className="header">
        <div className="container">
            <a href="" className="logo">
                {logoText}
            </a>

            <NavItem label="Home" href="/"/>
        </div>
    </header>
};

Header.propTypes = {
    logoText: PropTypes.string.isRequired
}
