import React from 'react';
import SimpleText from  './SimpleText'
import AudioText from  './AudioText'
import InputSolverMapper from '../constant/InputSolverMapper';

const mapper = [
    {
        'slug': InputSolverMapper.SIMPLTE_TEXT,
        'component': SimpleText
    },
    {
        'slug': InputSolverMapper.AUDIO_TEXT,
        'component': AudioText
    }
]

function getComponentNameBySlug(slug) {
    let element =  mapper.find(el => {
        return slug === el.slug
    });

    return element.component;
}

class InputHandler extends React.Component {

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

        InputSolverMapper.getInfoAvailableInputs().forEach(function (availableInput) {
            selectOptions.push((
                <option key={availableInput.slug} value={availableInput.slug}>{availableInput.label}</option>
            ));

        });

        this.componentName = getComponentNameBySlug(this.state.input);

        return (
            <div>
                <div>
                    <h3>select input type </h3>
                    <select defaultValue={this.state.input} onChange={this.handleChange}>
                        {selectOptions}
                    </select>
                </div>
                <div>
                    <this.componentName />
                </div>
            </div>
        )
    }
}

export default InputHandler;