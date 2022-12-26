import React from "react";
import {NavItem} from "./NavItem";
import PropTypes from "prop-types";


export const Header = ({logoText}) => {
    return <header className="header">
        <div className="container">
            <a href="" className="logo">
                {logoText}
            </a>
            <NavItem/>
        </div>
    </header>
};

Header.propTypes = {
    logoText: PropTypes.string.isRequired,
}
// Header.propTypes = {
//     logoText: PropTypes.string.isRequired,
//     navItem: PropTypes.arrayOf(     ------------------------пропса для массива, в котором обЪекты - с урока инфа
// //         PropTypes.shape(
// //             {
// //                 label: PropTypes.string,
// //                 href: PropTypes.string.isRequired
// //             }
// //         ))
// }
