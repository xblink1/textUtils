import React, {useState} from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText ] = useState('Enter Text here')
    const handleUpClick = () => {
        console.log('clicked');
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div className=" container mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            title
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            ></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>


        </div>

        </>
    );
}