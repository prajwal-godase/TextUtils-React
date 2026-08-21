import React,{ useState } from "react";

export default function TextForm(props) {

    const [text, setText]=useState("");
    // text="New text"; // Wrong way to change state
    // setText("New Text");// Correct way

    const handleUpperClick=()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText )
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value )
    }

  return (
    <>
    <div className="Container">     
        <h2>{props.heading}</h2> 
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
    </div>

    <div className="Container my-2">
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length)} minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  );
}
