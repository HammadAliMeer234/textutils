import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Form(props) {
    let [text, recentText] = useState("")
    const { speak } = useSpeechSynthesis()

    function onChangeVal(e) {
        recentText(e.target.value);
    }
    function upperCase() {
        let upper = text.toUpperCase()
        recentText(upper);
    }
    function lowerCase() {
        let upper = text.toLowerCase()
        recentText(upper);
    }
    function handleReadVoice() {
        console.log("handleReadVoice");
        speak({text :text })
    }
    return (
        <div>
            <div className="container my-3" style={{ color: props.mode === "light"?"gray" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea style={{backgroundColor :  props.mode === "light"?"white" : "gray" ,color: props.mode === "light"?"black" : "white" } } className="form-control" value={text} onChange={onChangeVal} id="textForm" rows="8"></textarea>
                </div>

                <div className="my-3">
                    <span className="mx-1"><button className="btn btn-primary" onClick={upperCase}>To Upper Case</button></span>
                    <span className="mx-1"><button className="btn btn-primary" onClick={lowerCase}>To Upper Case</button></span>
                    <span className="mx-1"><button className="btn btn-primary" onClick={handleReadVoice}>Reade Voice</button></span>
                </div>
            </div>
        </div>
    )
}
