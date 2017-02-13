import React, {Component} from 'react';
import InputHandler from './input/InputHandler';
import SolverHandler from './solver/SolverHandler';

import InputSolverMapper from './constant/InputSolverMapper';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeComponent: InputHandler,
            componentData: {}
        };

        this.handleSwitchAction = this.handleSwitchAction.bind(this);
    }

    handleSwitchAction(data) {
        let component;

        switch (data.type) {
            case InputSolverMapper.HANDLER_INPUT:
                component = SolverHandler;
                break;
            case InputSolverMapper.HANDLER_SOLVER:
                component = InputHandler;
                break;
            default:
                throw new Error('type not found ');
        }

        this.setState({
            activeComponent: component,
            componentData: data
        });
    }

    render() {

        return (
            <div className="Main">
                <this.state.activeComponent handleSwitchAction={this.handleSwitchAction}
                                            initialData={this.props.componentData}/>
            </div>
        );
    }
}

export default Main;
