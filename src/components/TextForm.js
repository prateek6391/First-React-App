import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUPClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!",  "success");
    }

    const handleLOClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!",  "success");
    }

    const handleCLRClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text  Cleared!",  "success");
    }
    /*
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let countVow = 0,countCons = 0;

    const handleVowClick = () => {
        for (count = 0; count <= text.length; count++) {
            vC++;
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
    */
   
    const handleExtraSpaces = () => {
        let nText = text.split(/[ ]+/);
        setText(nText.join(" "));
        props.showAlert("Extra Spaces Removed!",  "success");
    }

    const handleCopy = () =>{
        let textC = document.getElementById("myBox");
        textC.select();
        navigator.clipboard.writeText(textC.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied To Clipboard!",  "success");
    }

    
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new Text";      //  Wrong way to change the state   
    // setText("new Text");      //  Wrong way to change the state 
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="container mb-3" >
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPClick}>UpperCase</button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleLOClick}>LowerCase</button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleCLRClick}>Clear Text</button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handleVowClick}>Count Vowel</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleConClick}>Count Consonents</button> */}
        <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.trim().length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Handle Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.trim().length===0?0: text.length} characters</p>
        {/* <p>{text.length>0? `${count} No. of Vowels`:""}</p>
        <p>{text.length>0? `${count1} No. of Consonants`:""}</p> */}
        <h2>Preview</h2>
        <p>{text.length>0? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
