import React from 'react';

class ControlButtons extends React.Component {
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
            startPauseBtnText = 'Stop';
        } else {
            startPauseBtnText = 'Start';
        }

        let disabledStepBack = false;
        let disabledStepForward = false;
        if(this.props.currentElement === 0) {
            disabledStepBack = true;
        }

        if(this.props.currentElement === this.props.totalElements) {
            disabledStepForward = true;
        }

        return (
            <div>
                <button disabled={disabledStepBack}  onClick={this.props.stepBack}>&lt;</button>
                <button onClick={this.toggleStartPauseBtn}>{startPauseBtnText}</button>
                <button disabled={disabledStepForward} onClick={this.props.stepForward}>&gt;</button>
                {/*<button onClick={this.toEnd}>&gt;&gt;</button>*/}
            </div>
        )
    }
}

export  default ControlButtons;