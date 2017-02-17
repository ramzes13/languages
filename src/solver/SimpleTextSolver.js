import React from 'react';
import TinyMCE from 'react-tinymce';
import TTSControle from './TTSControle';

class SimpleTextSolver extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.data;

        this.ttsConfigDone = this.ttsConfigDone.bind(this);
        this.configureTTS = this.configureTTS.bind(this);

    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    };

    ttsConfigDone(ttsConfig) {
        this.setState({
            ttsConfig: ttsConfig,
            configMode: false
        })
    }
    configureTTS() {
        this.setState({
            configMode: true
        })
    }

    render() {
        return (
            <div>
                <TinyMCE
                    content=""
                    config={{
                        menubar: false,
                        plugins: '',
                        toolbar: 'undo redo'
                    }}
                    onChange={this.handleEditorChange}
                />
                <div>
                    <TTSControle configureTTS={this.configureTTS}/>
                </div>
            </div>

        );
    }
}

export default SimpleTextSolver;