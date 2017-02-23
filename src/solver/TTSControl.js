import React from 'react';
import ControlButtons from './ControlButtons';
import Speech from 'speak-tts';

class TTSSControl extends React.Component {

    static STATE_PAUSE = 0;
    static STATE_RUNNING = 1;

    constructor(props) {
        super(props);

        this.state = {
            currentState: TTSSControl.STATE_PAUSE,
            currentElement: 0
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.stepBack = this.stepBack.bind(this);
        this.stepForward = this.stepForward.bind(this);

        Speech.init({
            'onVoicesLoaded': (data) => {console.log('voices', data.voices)},
            'lang': 'en-GB', // specify en-GB language (no detection applied)
            'volume': 0.5,
            'rate': 0.8,
            'pitch': 0.8
        })
    }

    stepBack() {
        this.setState({
            currentState: TTSSControl.STATE_PAUSE,
            currentElement: this.state.currentElement - 1
        });
    }

    stepForward() {
        this.setState({
            currentState: TTSSControl.STATE_PAUSE,
            currentElement: this.state.currentElement + 1
        });
    }

    start() {

        let parent = this;
        console.log('start');
        Speech.speak({
            text: this.getCurrentText(),
            onEnd: () => {
                console.log('on end');
                parent.stop();
            }
        });

        this.setState({
            currentState: TTSSControl.STATE_RUNNING
        });
    }

    stop() {
        this.setState({
            currentState: TTSSControl.STATE_PAUSE
        });
    }

    getCurrentText() {
        return this.props.getTextByPosition(this.state.currentElement);
    }

    render() {

        return (
            <div>
                <h2>TTS control</h2>

                {/*<div>*/}
                    {/*<label>*/}
                        {/*<input type="radio" value={TTSSControl.META_PHRASE} name="meta-type"*/}
                               {/*checked={this.state.selectedOptionMeta === TTSSControl.META_PHRASE}*/}
                               {/*onChange={this.handleOptionChange}/>*/}
                        {/*Phrases*/}
                    {/*</label>*/}
                    {/*<label>*/}
                        {/*<input type="radio" value={TTSSControl.META_WORDS} name="meta-type"*/}
                               {/*checked={this.state.selectedOptionMeta === TTSSControl.META_WORDS}*/}
                               {/*onChange={this.handleOptionChange}/>*/}
                        {/*Words*/}
                    {/*</label>*/}
                {/*</div>*/}
                <ControlButtons currentElement={this.state.currentElement} totalElements={this.props.totalElements}
                                stepBack={this.stepBack} stepForward={this.stepForward} currentState={this.state.currentState}
                                start={this.start} stop={this.stop} />
                {/*{this.renderControl(this.state.selectedOptionMeta)}*/}

            </div>
        )
    }
}

export default TTSSControl;