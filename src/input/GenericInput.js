import React from 'react';
import SimpleText from  './SimpleText'
import AudioText from  './AudioText'

const availableInputs = [
    {'slug': 'simple-text', 'label': 'Simple Text', 'component': SimpleText},
    {'slug': 'audio-text', 'label': 'Audio with text', 'component': AudioText},
];

class GenericInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: 'simple-text'
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleStart(data) {
        console.log(data);
    }

    render() {
        let selectOptions = [];
        let selectedComponent, parent = this;

        availableInputs.forEach(function (availableInput) {
            if(availableInput.slug === parent.state.input) {
                selectedComponent = availableInput;
            }

            selectOptions.push((
                <option key={availableInput.slug} value={availableInput.slug}>{availableInput.label}</option>
            ));

        });

        this.componentName = selectedComponent['component'];

        return (
            <div>
                <div>
                    <h3>select input type </h3>
                    <select defaultValue={this.state.input} onChange={this.handleChange}>
                        {selectOptions}
                    </select>
                </div>
                <div>
                    <this.componentName handleStart={(data) => this.handleStart(data)}/>
                </div>
            </div>
        )
    }
}

export default GenericInput;