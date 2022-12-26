import React from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Main} from "./Main";


const Application = () => {
    return <div className="wrapper">
        <Header logoText="My logo"/>

     <Main mainTitleText="Posts"/>
        <Footer logoFooterText="Logo" copyrightText="Small static blog @ 2022"/>
    </div>;
};

export default Application;
