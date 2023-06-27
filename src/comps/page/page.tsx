import React from 'react'
import './page.scss';
import {HeaderComp} from "../headerComp/headerComp";
import NavigationButton from "../navigationButton/navigationButton";
import {MyRouter} from "../../utils/myRouter";
import {FooterComp} from "../footerComp/footerComp";

const Page = () => {
    return <div className="page">
        <div className="header">
            <HeaderComp/>
        </div>
        <div className="content">
            <MyRouter/>
        </div>
        <div className="footer">
            <FooterComp/>
        </div>
    </div>
};

export default Page;