import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase.","success")
  };
  const handleUpClick2 = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase.","success")
  };
  const cleanText = () => {
    setText("");
  };
  const download = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "react.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    props.showAlert("File downloaded!","success")
  };
  const [text, setText] = useState("Enter Text here");
  let words = text.split(" ").filter(item => item !== "").length;
  let temp = {
    backgroundColor : props.mode === 'light' ? 'white' : 'black',
    color :props.mode === 'light'? 'black' :'white'
   }
   const [c, setC] = useState(0);
  return (
    <>
      <div>
        <div className=" container mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={temp}>
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            
            style={temp}
            onChange={handleOnChange}
            onClick={() => { if (c === 0) {
                cleanText()
            }; setC((prevC) => prevC + 1); }}

            ></textarea>
          <button className="btn my-2" onClick={handleUpClick} style={temp}>
            Convert to Uppercase
          </button>
          <button className="btn mx-3" onClick={handleUpClick2} style={temp}>
            Convert to Lowercase
          </button>
          <button className="btn" onClick={cleanText} style={temp}>
            Clear
          </button>
          <button className="btn mx-3 " onClick={download} style={temp} >
            Download .txt
          </button>
        </div>

        <div className="container my-3" style={temp}>
          <h2>Your text summary</h2>
          <p>
            text has {words} words and {text.length} characters{" "}
          </p>
          <p>{0.008 * words} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length> 0?text:"Enter something to preview it here"}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  title: PropTypes.string,
};
