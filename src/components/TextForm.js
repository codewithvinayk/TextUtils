import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'success');
  }

  const handleLoClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert('Converted to Lowercase!', 'success')
  }

  const handleCapitalizeWords = () => {
    const words = text.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    setText(capitalizedWords.join(" "));
    props.showAlert('The first letter of each word is capatilized!', 'success');
  };

  const handleCopy = () => {
    let text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Text is copied to clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    const newText4 = text.split(/[ ] +/);
    setText(newText4.join(" "));
    props.showAlert('Extra Spaces are Removed!', 'success');
  }

  const handleClClick = () => {
    let newText2 = '';
    setText(newText2);
    props.showAlert('Text is Cleared!', 'success');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" style={{ color: props.mode === 'dark' ? 'white' : '#042743', backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' }} value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-secondary ms-3 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-success ms-3 my-2" onClick={handleCapitalizeWords} >Capitalized Words</button>
        <button disabled={text.length === 0} className="btn btn-warning ms-3 my-2" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-info ms-3 my-2" onClick={handleExtraSpaces} >Remove Extra Space</button>
        <button disabled={text.length === 0} className="btn btn-danger ms-3 my-2" onClick={handleClClick} >Clear Text</button>
      </div >
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text Summary</h2>
        <p><b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> minutes reading time </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview!"} </p>
      </div>
    </>
  )
};
