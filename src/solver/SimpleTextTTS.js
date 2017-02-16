import Speech from 'speak-tts';
import React from 'react';

class SimpleTextTTS extends React.Component {

    static DEFAULT_LANG = 'en-GB';

    languages = [
        {slug: 'en-GB', label: 'English'},
        {slug: 'fr-FR', label: 'French'},
        {slug: 'es-ES', label: 'Spanish'},
        {slug: 'ro-RO', label: 'Romanian'},
        {slug: 'ru-RU', label: 'Russian'},
    ];

    constructor(props) {
        super(props);

        this.state = {
            lang: SimpleTextTTS.DEFAULT_LANG,
            volume: 0.5,
            rate: 0.8,
            pitch: 0.8
        };

        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handlePitchChange = this.handlePitchChange.bind(this);
    }

    setFloatValuesToState(val, stateKey) {
        let floatVal = parseFloat(val);
        if (!isNaN(floatVal)) {
            let newState = {};
            newState[stateKey] = floatVal;
            this.setState(newState);
        }
    }

    handleLanguageChange(e) {
        this.setState({
            lang: e.target.value
        });
    }

    handleVolumeChange(e) {
        this.setFloatValuesToState(e.target.value, 'volume')
    }

    handleRateChange(e) {
        this.setFloatValuesToState(e.target.value, 'rate')
    }

    handlePitchChange(e) {
        this.setFloatValuesToState(e.target.value, 'pitch')
    }

    render() {
        console.log(this.state);
        let languages = [];

        this.languages.forEach((language) => {
            languages.push((
                <option key={language.slug} value={language.slug}>{language.label}</option>
            ))
        });

        return (
            <div>
                <select defaultValue={this.state.lang} onChange={this.handleLanguageChange}>
                    {languages}
                </select>
                <label>
                    Volume:
                    <input type="text" value={this.state.volume} onChange={this.handleVolumeChange}/>
                </label>
                <label>
                    Rate:
                    <input type="text" value={this.state.rate} onChange={this.handleRateChange}/>
                </label>
                <label>
                    Pitch:
                    <input type="text" value={this.state.pitch} onChange={this.handlePitchChange}/>
                </label>
            </div>
        )
    }
}

export default SimpleTextTTS;