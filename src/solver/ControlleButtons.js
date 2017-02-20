import React from 'react';

class ControlleButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentState: 'pause'
        };

        this.toggleStartPauseBtn = this.toggleStartPauseBtn.bind(this);
    }

    toggleStartPauseBtn() {
        let parent = this;

        this.setState((prevState) => {
            let currentState;

            if (prevState.currentState === 'running') {
                parent.props.stop();
                currentState = 'pause';
            } else {
                parent.props.start();
                currentState = 'running';
            }

            return {currentState: currentState}
        })
    }

    render() {
        let startPauseBtnText;

        if (this.state.currentState === 'running') {
            startPauseBtnText = 'Pause';
        } else {
            startPauseBtnText = 'Start';
        }

        return (
            <div>
                <button onClick={this.props.toBegin}>&lt;&lt;</button>
                <button onClick={this.stepBack}>&lt;</button>
                <button onClick={this.toggleStartPauseBtn}>{startPauseBtnText}</button>
                <button onClick={this.stepForward}>&gt;</button>
                <button onClick={this.toEnd}>&gt;&gt;</button>
            </div>
        )
    }
}

export  default ControlleButtons;