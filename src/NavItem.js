import React from "react";
import PropTypes from "prop-types";

let navLinks = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About us',
        href: '/#about'
    },
    {
        label: 'Contact us',
        href: '/#contact'
    },

];

export function NavItem (label, href) {
     function navItemList () {
        return  navLinks.map(({label, href}) => {
            return <li key={label} className="nav-list__item">
                <a href={href}>
                    {label}
                </a>
            </li>
        })
    }

    return <nav>
        <ul className="nav-list">
            {
                navItemList({label, href})
            }
        </ul>
    </nav>
}


NavItem.propTypes = {
            label: PropTypes.string,
            href: PropTypes.string,
        }
