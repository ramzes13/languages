import React from 'react';
import Speech from 'speak-tts';

class TTSControle extends React.Component {
    context = null;

    constructor(props) {
        super(props);
        console.log('constructor TTSControle');

        this.setCanvasContext = this.setCanvasContext.bind(this);
        this.colorStripClick = this.colorStripClick.bind(this);
    }

    colorStripClick() {
        this.context.fillStyle = 'green';
        this.context.fillRect(10, 10, 100, 100);
    }

    setCanvasContext(c) {
        if(c && c.getContext) {
            this.context = c.getContext('2d');
        }
    }

    render() {
        return (
            <div>
                <h2>TTSControle</h2>
                <canvas id="canvas" onClick={this.colorStripClick}
                        ref={this.setCanvasContext}></canvas>
            </div>
        )
    }
}

export default TTSControle;