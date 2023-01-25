import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUPClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLOClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCLRClick = ()=>{
        let newText = '';
        setText(newText)
    }

    const handleVowClick = () => {
        for (count = 0; count <= text.length; count++) {
            if (text.charAt(count).match(/[aeiouAEIOU]/)) {
                countVow++;
                setCount(countVow);
            }
        }
    };

    const handleConClick = () => {
        for (count = 0; count <= text.length; count++) {
            if (!text.charAt(count).match(/[aeiouAEIOU]/)) {
                countCons++;
                setCount1(countCons);
            }
        }
    };

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new Text";      //  Wrong way to change the state   
    // setText("new Text");      //  Wrong way to change the state 
    
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let countVow = 0,countCons = 0;

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="container mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLOClick}>LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCLRClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleVowClick}>Count Vowel</button>
        <button className="btn btn-primary mx-1" onClick={handleConClick}>Count Consonents</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{count} No. of Vowels, {count1} No. of Consonants</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
