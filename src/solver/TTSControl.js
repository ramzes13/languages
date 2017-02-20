import React from 'react';
import TtsSControlPhrase from './TtsSControlPhrase'
import Speech from 'speak-tts';

class TtsSControl extends React.Component {

    static META_PHRASE = 1;
    static META_WORDS = 2;

    constructor(props) {
        super(props);
        console.log('constructor TtsSControl');

        this.state = {
            selectedOptionMeta: TtsSControl.META_PHRASE,
            currentState: 'pause'
        };
        this.colorStripClick = this.colorStripClick.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.toggleStartPauseBin = this.toggleStartPauseBin.bind(this);
    }

    colorStripClick() {
        this.canvasContext.fillStyle = 'green';
        this.canvasContext.fillRect(10, 10, 100, 100);
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
        this.setState({
            selectedOptionMeta: parseInt(e.target.value)
        });
    }

    renderControl(type) {
        return <TtsSControlPhrase />;
    }

    toggleStartPauseBin() {
        this.setState((prevState, props) => ({
            currentState: prevState.currentState === 'running' ? 'pause' : 'running'
        }))
    }

    render() {
        let startPauseBtnText;
        if (this.state.currentState === 'running') {
            startPauseBtnText = 'Pause';
        } else {
            startPauseBtnText = 'Start';
        }

        return (
            <div>
                <h2>TTSControle</h2>

                <div>
                    <label>
                        <input type="radio" value={TtsSControl.META_PHRASE} name="meta-type"
                               checked={this.state.selectedOptionMeta === TtsSControl.META_PHRASE}
                               onChange={this.handleOptionChange}/>
                        Phrases
                    </label>
                    <label>
                        <input type="radio" value={TtsSControl.META_WORDS} name="meta-type"
                               checked={this.state.selectedOptionMeta === TtsSControl.META_WORDS}
                               onChange={this.handleOptionChange}/>
                        Words
                    </label>
                </div>

                <button onClick={this.toBegin}>&lt;&lt;</button>
                <button onClick={this.stepBack}>&lt;</button>
                <button onClick={this.toggleStartPauseBin}>{startPauseBtnText}</button>
                <button onClick={this.stepForward}>&gt;</button>
                <button onClick={this.toEnd}>&gt;&gt;</button>
                {this.renderControl(this.state.selectedOptionMeta)}

            </div>
        )
    }
}

export default TtsSControl;