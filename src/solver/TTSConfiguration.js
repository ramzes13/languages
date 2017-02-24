import React from 'react';

class TTSConfiguration extends React.Component {

    static DEFAULT_LANG = 'en-GB';

    static languages = [
        {slug: 'en-GB', label: 'English'},
        {slug: 'fr-FR', label: 'French'},
        {slug: 'es-ES', label: 'Spanish'},
        {slug: 'ro-RO', label: 'Romanian'},
        {slug: 'ru-RU', label: 'Russian'},
    ];

    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.config;

        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handlePitchChange = this.handlePitchChange.bind(this);
        this.configDone = this.configDone.bind(this);
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
        console.log('on blurr');
        this.setFloatValuesToState(e.target.value, 'volume')
    }

    handleRateChange(e) {
        this.setFloatValuesToState(e.target.value, 'rate')
    }

    handlePitchChange(e) {
        this.setFloatValuesToState(e.target.value, 'pitch')
    }
    configDone() {
        this.props.configDone(this.state);
    }

    render() {
        let languages = [];

        TTSConfiguration.languages.forEach((language) => {
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
                    <input type="text" defaultValue={this.state.volume} onBlur={this.handleVolumeChange}/>
                </label>
                <label>
                    Rate:
                    <input type="text" defaultValue={this.state.rate} onBlur={this.handleRateChange}/>
                </label>
                <label>
                    Pitch:
                    <input type="text" defaultValue={this.state.pitch} onBlur={this.handlePitchChange}/>
                </label>
                <button onClick={this.configDone}>Save</button>
            </div>
        )
    }
}

export default TTSConfiguration;