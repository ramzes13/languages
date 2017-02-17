import React, {Component} from 'react';
import SimpleTextTTSConfig from './SimpleTextTTSConfig';

class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

        this.state = {
            text: props.data.text,
            ttsConfig: {
                lang: SimpleTextTTSConfig.DEFAULT_LANG,
                volume: 0.5,
                rate: 0.8,
                pitch: 0.8
            }
        }
    }

    handleTextAreaChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit() {
        this.props.handleStart(this.state);

    }

    render() {
        return (
            <div>
                <h3> Simple text </h3>
                <textarea value={this.state.text} onChange={this.handleTextAreaChange}></textarea>
                <SimpleTextTTSConfig config={this.state.ttsConfig} configDone={this.ttsConfigDone}/>
                <button onClick={this.handleSubmit}>Start Session</button>
            </div>
        )
    }
}

export  default SimpleTextInput;
