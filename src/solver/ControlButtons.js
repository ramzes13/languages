import React from 'react';
import TTSSControl from './TTSControl';

class ControlButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentState: props.currentState
        };

        this.toggleStartPauseBtn = this.toggleStartPauseBtn.bind(this);
    }

    toggleStartPauseBtn() {

        let currentState;

        if (this.props.currentState === TTSSControl.STATE_RUNNING) {
            this.props.stop();
            currentState = TTSSControl.STATE_PAUSE;
        } else {
            this.props.start();
            currentState = TTSSControl.STATE_RUNNING;
        }

        this.setState({currentState: currentState});
    }

    render() {
        console.log('control render')
        let startPauseBtnText;

        if (this.props.currentState === TTSSControl.STATE_RUNNING) {
            startPauseBtnText = 'Stop';
        } else {
            startPauseBtnText = 'Start';
        }

        let disabledStepBack = false;
        let disabledStepForward = false;
        let disabledStartStop = false;
        if(this.props.currentElement === 0) {
            disabledStepBack = true;
        }

        if(this.props.currentElement === this.props.totalElements) {
            disabledStepForward = true;
        }

        if(this.props.totalElements === 0) {
            disabledStartStop = true;
        }

        return (
            <div>
                <button disabled={disabledStepBack}  onClick={this.props.stepBack}>&lt;</button>
                <button disabled={disabledStartStop} onClick={this.toggleStartPauseBtn}>{startPauseBtnText}</button>
                <button disabled={disabledStepForward} onClick={this.props.stepForward}>&gt;</button>
                {/*<button onClick={this.toEnd}>&gt;&gt;</button>*/}
            </div>
        )
    }
}

export  default ControlButtons;