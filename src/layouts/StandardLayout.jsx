import React from "react";
import Navigation from "../component/Navigation";

const StandardLayout = (props) =>
    <div className="mx-max">
        <Navigation/>
        <div className="transition ease-in-out delay-300">
            {props.children}
        </div>
    </div>;

export default StandardLayout;
