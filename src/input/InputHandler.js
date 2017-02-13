import React from 'react';
import SimpleTextInput from  './SimpleTextInput';
import AudioTextInput from  './AudioTextInput';

import InputSolverMapper from '../constant/InputSolverMapper';

const mapper = [
    {
        'slug': InputSolverMapper.INPUT_SIMPLTE_TEXT,
        'component': SimpleTextInput
    },
    {
        'slug': InputSolverMapper.INPUT_AUDIO_TEXT,
        'component': AudioTextInput
    }
];

function getComponentNameBySlug(slug) {
    let element = mapper.find(el => {
        return slug === el.slug
    });

    return element.component;
}

class InputHandler extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: InputSolverMapper.INPUT_SIMPLTE_TEXT
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleStart = this.handleStart.bind(this);

    }

    handleChangeInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleStart(data) {
        let startData = {
            componentData: data,
            type: InputSolverMapper.HANDLER_INPUT,
        };

        this.props.handleSwitchAction(startData);
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
                    <select defaultValue={this.state.input} onChange={this.handleChangeInput}>
                        {selectOptions}
                    </select>
                </div>
                <div>
                    <this.componentName handleStart={this.handleStart} initialData={this.props.initialData}/>
                </div>
            </div>
        )
    }
}

export default InputHandler;