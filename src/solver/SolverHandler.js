import React from 'react';
import SimpleTextSolver from './SimpleTextSolver';

import InputSolverMapper from '../constant/InputSolverMapper';

const mapper = [
    {
        'slug': InputSolverMapper.SOLVER_SIMPLTE_TEXT,
        'component': SimpleTextSolver
    },
    // {
    //     'slug': InputSolverMapper.SOLVER_AUDIO_TEXT,
    //     'component': AudioTextInput
    // }
];

function getComponentNameBySlug(slug) {
    let element = mapper.find(el => {
        return slug === el.slug
    });

    return element ? element.component : SimpleTextSolver;
}

class SolverHandler extends React.Component {

    constructor(props) {
        super(props);

        this.state = props.data;

        this.backHandler = this.backHandler.bind(this);
    }

    backHandler() {

        let startData = {
            componentData: this.state.componentData,
            handlerComponent: this.state.handlerComponent,
            currentHandler: InputSolverMapper.HANDLER_SOLVER
        };

        this.props.handleSwitchAction(startData);
    }


    render() {

        this.componentName = getComponentNameBySlug(this.state.handlerComponent);

        return (
            <div>
                <button onClick={() => this.backHandler()}>Back to edit</button>
                <this.componentName handleStart={this.handleStart} data={this.state.componentData}/>
            </div>

        )
    }
}

export default SolverHandler;