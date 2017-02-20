import React from 'react';
import ControlleButtons from './ControlleButtons';

class TtsSControlPhrase extends React.Component {

    canvasContext = null;

    constructor(props) {
        super(props);

        this.setCanvasContext = this.setCanvasContext.bind(this);

        this.state = {
            ttsTextMeta: this.generateTTsMeta(props.ttsText)
        };

        this.toBegin = this.toBegin.bind(this);
        this.toEnd = this.toEnd.bind(this);
        this.stepBack = this.stepBack.bind(this);
        this.stepForward = this.stepForward.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    generateTTsMeta(text) {
        console.log(text);
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

    start() {

    }

    stop() {

    }

    setCanvasContext(c) {
        if (c && c.getContext) {
            this.canvasContext = c.getContext('2d');
        } else {
            this.canvasContext = null
        }
    }

    render() {
        return (
            <div>
                <ControlleButtons toBegin={this.toBegin} toEnd={this.toEnd}
                                  stepBack={this.stepBack} stepForward={this.stepForward}
                                  start={this.start} stop={this.stop}/>

                <canvas onClick={this.colorStripClick} ref={this.setCanvasContext}></canvas>
            </div>
        )
    }
}

export default TtsSControlPhrase;