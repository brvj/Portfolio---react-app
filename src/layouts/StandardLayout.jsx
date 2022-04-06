import React from "react";
import Navigation from "../component/Navigation";

const StandardLayout = (props) =>
    <div className="mx-max">
        <Navigation/>
        {props.children}
    </div>;

export default StandardLayout;
