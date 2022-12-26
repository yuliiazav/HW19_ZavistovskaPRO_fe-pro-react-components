import React from "react";
 import PropTypes from "prop-types";

export const Footer  = ({logoFooterText, copyrightText}) => {
    return <footer className="footer">
        <div className="container">
            <a href="" className="logo">
                {logoFooterText}
            </a>
            <p className="copyright">
                {copyrightText}
            </p>
        </div>
    </footer>
};

Footer.propTypes = {
    logoFooterText: PropTypes.string.isRequired,
    copyrightText: PropTypes.string.isRequired,

}