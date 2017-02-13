import React, {Component} from 'react';
import InputHandler from './input/InputHandler';

const inputSolverMapper = [
    {'input': 'simple-text', 'solver': ''}
];

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <InputHandler />
            </div>
        );
    }
}

export default Main;
