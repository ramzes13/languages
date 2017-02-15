import React, {Component} from 'react';
import InputHandler from './input/InputHandler';
import SolverHandler from './solver/SolverHandler';

import InputSolverMapper from './constant/InputSolverMapper';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentHandler: InputHandler,
            data: {
                componentData:{},
                handlerComponent: InputSolverMapper.COMPONENT_SIMPLTE_TEXT
            }
        };

        this.handleSwitchAction = this.handleSwitchAction.bind(this);
    }

    handleSwitchAction(data) {
        let component;

        switch (data.currentHandler) {
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
            currentHandler: component,
            data: {
                componentData: data.componentData,
                handlerComponent: data.handlerComponent
            }
        });
    }

    render() {

        return (
            <div className="Main">
                <this.state.currentHandler handleSwitchAction={this.handleSwitchAction}
                                            data={this.state.data} />
            </div>
        );
    }
}

export default Main;
