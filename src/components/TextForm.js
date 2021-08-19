import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase click");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("lowercase click");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearClick = () => {
        // console.log("clear click");
        let newText = "";
        setText(newText);
    }
    const capClick = () => {
        // console.log("Capitalize letter");
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <div className="mb-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "#2d3436" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick} >Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={clearClick} >Clear</button>
                <button className="btn btn-primary mx-1" onClick={capClick} >Cap</button>

            </div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h2> Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0? text : "Type something in the box to analyze"}</p>
            </div>
        </>
    )
}
