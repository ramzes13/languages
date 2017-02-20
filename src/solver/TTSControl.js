import React from 'react';
import Speech from 'speak-tts';

class TtsSControl extends React.Component {

    static META_PHRASE = 1;

    canvasContext = null;

    constructor(props) {
        super(props);
        console.log('constructor TtsSControl');

        this.state = {
            ttsTextMeta: this.generateTTsMeta(props.ttsText)
        };

        this.setCanvasContext = this.setCanvasContext.bind(this);
        this.colorStripClick = this.colorStripClick.bind(this);
    }

    generateTTsMeta(text, metaType = TtsSControl.META_PHRASE) {

    }

    colorStripClick() {
        this.canvasContext.fillStyle = 'green';
        this.canvasContext.fillRect(10, 10, 100, 100);
    }

    setCanvasContext(c) {
        if(c && c.getContext) {
            this.canvasContext = c.getContext('2d');
        } else {
            this.canvasContext = null
        }
    }

    toBegin() {
        console.log('to begin');
    }

    toEnd() {
        console.log('to end');
    }

    stepBack() {
        console.log('stepBack');
    }

    stepForward() {
        console.log('stepForward');
    }

    handleOptionChange(e) {
        console.log(e.target)
    }

    render() {
        return (
            <div>
                <h2>TTSControle</h2>

                <div onChange={this.handleOptionChange}>
                    <input type="radio" value="MALE" name="gender"/> Male
                    <input type="radio" value="FEMALE" name="gender"/> Female
                </div>

                <button onClick={this.toBegin}>&lt;&lt;</button>
                <button onClick={this.stepBack}>&lt;</button>
                <button onClick={this.stepForward}>&gt;</button>
                <button onClick={this.toEnd}>&gt;&gt;</button>

                <canvas id="canvas" onClick={this.colorStripClick} ref={this.setCanvasContext}></canvas>
            </div>
        )
    }
}

export default TtsSControl;