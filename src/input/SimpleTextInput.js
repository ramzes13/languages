import React, {Component} from 'react';

class SimpleTextInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

        console.log('aaa');
        this.state = {
            textAreaValue: props.data.text
        }
    }

    handleTextAreaChange(e) {
        this.setState({textAreaValue: e.target.value});
    }

    handleSubmit() {
        let data = {
            'text': this.state.textAreaValue,
        };

        this.props.handleStart(data);

    }

    render() {
        return (
            <div>
                <h3> Simple text </h3>
                <textarea value={this.state.textAreaValue} onChange={this.handleTextAreaChange}></textarea>
                <button onClick={this.handleSubmit}>Start Session</button>
            </div>
        )
    }
}

export  default SimpleTextInput;