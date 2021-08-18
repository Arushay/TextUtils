import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnText, setBtnText] = useState("Dark mode");

    let toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Dark mode");
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText("light mode");
        }
    }

    return (
        <div className="container my-2" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" onClick={toggleStyle} className="btn btn-dark my-3">{btnText}</button>
        </div>
    );
}
