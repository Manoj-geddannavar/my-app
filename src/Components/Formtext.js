import React, { useState } from 'react'

export default function Formtext(props) {

    const handleUpClick = () => {
        // console.log("Handle Up Clicked." + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("Handle Up Clicked." + text)
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("ON Change..");
        setText(event.target.value);
    }

    const clearClick=()=>{
       setText(' ')
    }

    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState(" ");
    //text="type your text"---this not currect way to change the state
    //setText("type your text")---this is the correct way to cheng the stae
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}> Convert to upperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}> Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={clearClick}> Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}> Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}> Remove extra space</button>
            
            <div className="container my-3" >
                <h3>Your text Summery</h3>
                <h6>{text.split(' ').length} words and {text.length} charecters</h6>
                <h6>{0.008 * text.split(' ').length} minuts to read</h6>
                <h3 className='my-3'>Text preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}