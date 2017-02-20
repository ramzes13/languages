import React from 'react';

class TtsSControlPhrase extends React.Component {

    canvasContext = null;

    constructor(props) {
        super(props);

        this.setCanvasContext = this.setCanvasContext.bind(this);

        this.state = {
            ttsTextMeta: this.generateTTsMeta(props.ttsText)
        }
    }

    generateTTsMeta(text) {
        console.log(text);
    }

    setCanvasContext(c) {
        if(c && c.getContext) {
            this.canvasContext = c.getContext('2d');
        } else {
            this.canvasContext = null
        }
    }
    render() {
        return(
            <div>
                <canvas id="canvas" onClick={this.colorStripClick} ref={this.setCanvasContext}></canvas>
            </div>
        )
    }
}

export default TtsSControlPhrase;