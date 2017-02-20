import React from 'react';
import TtsSControlPhrase from './TtsSControlPhrase'
import Speech from 'speak-tts';

class TtsSControl extends React.Component {

    static META_PHRASE = 1;
    static META_WORDS = 2;

    constructor(props) {
        super(props);
        console.log('constructor TtsSControl');

        this.state = {
            selectedOptionMeta: TtsSControl.META_PHRASE,
            currentState: 'pause'
        };
        this.colorStripClick = this.colorStripClick.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);

    }

    handleOptionChange(e) {
        this.setState({
            selectedOptionMeta: parseInt(e.target.value)
        });
    }

    renderControl(type) {
        return <TtsSControlPhrase />;
    }

    colorStripClick() {
        this.canvasContext.fillStyle = 'green';
        this.canvasContext.fillRect(10, 10, 100, 100);
    }

    render() {

        return (
            <div>
                <h2>TTSControle</h2>

                <div>
                    <label>
                        <input type="radio" value={TtsSControl.META_PHRASE} name="meta-type"
                               checked={this.state.selectedOptionMeta === TtsSControl.META_PHRASE}
                               onChange={this.handleOptionChange}/>
                        Phrases
                    </label>
                    <label>
                        <input type="radio" value={TtsSControl.META_WORDS} name="meta-type"
                               checked={this.state.selectedOptionMeta === TtsSControl.META_WORDS}
                               onChange={this.handleOptionChange}/>
                        Words
                    </label>
                </div>

                {this.renderControl(this.state.selectedOptionMeta)}

            </div>
        )
    }
}

export default TtsSControl;