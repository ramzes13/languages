import React, { Component } from 'react';

class SimpleText extends Component {
    constructor(props) {
        super(props);
        console.log('simple text');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let someData = {
            'test': true,
        };

        this.props.handleStart(someData);

    }

    render() {
        return (
            <div>
                <h3> Simple text </h3>
                <textarea></textarea>
                <button onClick={this.handleSubmit}>Start Session</button>
            </div>
        )
    }
}

export  default SimpleText;