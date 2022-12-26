import React from "react";
import PropTypes from "prop-types";
import {Article} from "./Article";

export const Main = ({mainTitleText}) => {
    return <main>
        <section className="posts">
            <div className="container">
                <h1>
        {mainTitleText}
                </h1>
                <Article/>
             </div>
        </section>
    </main>

}
Main.propTypes = {
    mainTitleText: PropTypes.string,
}