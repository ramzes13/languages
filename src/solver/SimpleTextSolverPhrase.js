import React from 'react';
import TinyMCE from 'react-tinymce';
import TTSSControl from './TTSControl';

class SimpleTextSolverPhrase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textMeta: this.generateTTsMeta(props.text)
        };

        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.props.onTextMetaReady(this.state.textMeta);
    }

    generateTTsMeta(text) {

        return text.split(".")
            .map((phrase) => {
                return phrase.trim()
            })
            .filter((phrase) => {
                return (phrase.length > 0);
            });
    }

    render() {

        return (
            <div>
                some text
            </div>
        );
    }
}

export default SimpleTextSolverPhrase;