import React from "react";

function About(props) {
    return (
        <div>
            <img src={props.image} alt="blog logo" />
            <p>{props.about}</p>
        </div>
    );
}
export default About;