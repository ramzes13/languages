import React, {Component} from 'react';
import SimpleTextTTSConfig from './SimpleTextTTSConfig';

class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

        this.state = {
            // text: props.data.text,
            text: 'The baby is not injured badly. Its head is only a little scratched. However, the family has a problem. They are in the bedroom. The cat is outside the room. The family cannot get out of the bedroom. If they get out, the cat attacks them.'
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
                <textarea value={this.state.text} onChange={this.handleTextAreaChange} rows="15" cols="100">

                </textarea>
                <button onClick={this.handleSubmit}>Start Session</button>
            </div>
        )
    }
}

export  default SimpleTextInput;
