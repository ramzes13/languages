import React from 'react';
import SimpleTextInput from  './SimpleTextInput';
import AudioTextInput from  './AudioTextInput';

import InputSolverMapper from '../constant/InputSolverMapper';

const mapper = [
    {
        'slug': InputSolverMapper.COMPONENT_SIMPLTE_TEXT,
        'component': SimpleTextInput
    },
    {
        'slug': InputSolverMapper.COMPONENT_AUDIO_TEXT,
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
        let state = props.data;
        state.handlerComponent = state.handlerComponent || InputSolverMapper.COMPONENT_SIMPLTE_TEXT;
        this.state = props.data;

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleStart = this.handleStart.bind(this);

    }

    handleChangeInput(e) {
        this.setState({
            component: e.target.value
        })
    }

    handleStart(componentData) {
        let startData = {
            componentData: componentData,
            handlerComponent: this.state.handlerComponent,
            currentHandler: InputSolverMapper.HANDLER_INPUT
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

        this.componentName = getComponentNameBySlug(this.state.handlerComponent);

        return (
            <div>
                <div>
                    <h3>Select input type </h3>
                    <select defaultValue={this.state.component} onChange={this.handleChangeInput}>
                        {selectOptions}
                    </select>
                </div>
                <div>
                    <this.componentName handleStart={this.handleStart} data={this.state.componentData}/>
                </div>
            </div>
        )
    }
}

export default InputHandler;