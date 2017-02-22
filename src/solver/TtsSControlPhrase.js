import React from 'react';
import ControlButtons from './ControlButtons';
import Speech from 'speak-tts'

class TtsSControlPhrase extends React.Component {

    canvasContext = null;

    constructor(props) {
        super(props);

        console.log(props.ttsConfig);
        Speech.init(props.ttsConfig);


        this.setCanvasContext = this.setCanvasContext.bind(this);

        this.state = {
            ttsTextMeta: this.generateTTsMeta(props.ttsText),
            ttsCurrentState: 0
        };

        this.stepBack = this.stepBack.bind(this);
        this.stepForward = this.stepForward.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    generateTTsMeta(text) {
        return text.split(".")
            .map((phrase) => {
                return phrase.trim()
            })
            .filter((phrase) => {
                return (phrase.length > 0);
            });
    }

    getCurrentText() {
        return this.state['ttsTextMeta'][this.state['ttsCurrentState']] + '.';
    }

    stepBack() {
        console.log('stepBack');
    }

    stepForward() {
        console.log('stepForward');
    }

    start() {
        Speech.speak({
            text: this.getCurrentText()
        })
    }

    stop() {
        Speech.stop();
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
                <ControlButtons toBegin={this.toBegin} toEnd={this.toEnd}
                                stepBack={this.stepBack} stepForward={this.stepForward}
                                start={this.start} stop={this.stop}/>

                <canvas onClick={this.colorStripClick} ref={this.setCanvasContext}></canvas>
            </div>
        )
    }
}

export default TtsSControlPhrase;