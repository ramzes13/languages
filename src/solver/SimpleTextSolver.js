import React from 'react';
import TextSolverComponent from './TextSolverComponent';
import TTSSControl from './TTSControl';
import TextMetaGenerator from './TextMetaGenerator';

class SimpleTextSolver extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            displayTTSConfig: true,
            data: props.data,
            textMeta: TextMetaGenerator.generateTTsMeta(props.data.text),
            currentElement: 0,
        };

        this.getTextByPosition = this.getTextByPosition.bind(this);
    }

    getTextByPosition(position) {
        return this.state.textMeta[position];
    }

    render() {
        return (
            <div>
                <TextSolverComponent />
                <div>
                    <TTSSControl totalElements={this.state.textMeta.length - 1} getTextByPosition={this.getTextByPosition}/>
                </div>
            </div>
        );
    }
}

export default SimpleTextSolver;