import { Fragment } from "react";
import Navbar from "./navbar/navbar";
import Section from "./section/section";
import Slide from "./slide/slide";
import Footer from "./footer/footer";

export default function LandingPage(){
    return(
        <Fragment>
            <div className="trigger">
                <Navbar />
                <Section />
                <Slide />
                <Footer />
            </div>
        </Fragment>
    )
}