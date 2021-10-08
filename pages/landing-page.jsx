import React from "react";
import Content from "../components/LayoutLandingPage/Content/Content";
import Feature from "../components/LayoutLandingPage/Feature/Feature";
import FreeTrialLayout from "../components/LayoutLandingPage/FreeTrialLayout/FreeTrialLayout";
import Footer from "../components/LayoutLandingPage/Footer/Footer"

const LandingPage = () => {
    return (
        <>
            <Content />
            <Feature />
            <FreeTrialLayout />
            <Footer />
        </>
    );
};

export default LandingPage;