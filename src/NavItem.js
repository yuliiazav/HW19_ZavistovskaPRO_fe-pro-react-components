import React from "react";

export const NavItem = ({label, href}) => {
    return (
        <nav>
            <ul className="nav-list">
                <li key={label} className="nav-list__item">
                    <a href={href}>
                        {label}
                    </a>
                </li>

            </ul>
        </nav>
    )
}

