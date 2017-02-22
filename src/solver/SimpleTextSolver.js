import React from 'react';
import TinyMCE from 'react-tinymce';
import TTSSControl from './TTSControl';
import TTSConfig from './TTSConfig';

class SimpleTextSolver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayTTSConfig: true,
            ttsConfig: {
                lang: TTSConfig.DEFAULT_LANG,
                volume: 0.5,
                rate: 0.8,
                pitch: 0.8
            },
            data: props.data
        };

        this.updateTTSConfig = this.updateTTSConfig.bind(this);
    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    };

    togleTTSConfig() {
        this.setState({
            displayTTSConfig: !this.state.displayTTSConfig
        })
    }

    updateTTSConfig(config){
        this.setState({
            displayTTSConfig: false,
            ttsConfig: config
        })
    }

    renderTTSConfig()
    {
        // if(this.state.displayTTSConfig) {
            return <TTSConfig config={this.state.ttsConfig}
                              configDone={this.updateTTSConfig} />
        // }
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
                    <button onClick={() => {this.props.configDone(this.state)}}>Config done</button>
                    {this.renderTTSConfig()}
                    <TTSSControl ttsText={this.props.data.text} />

                </div>
            </div>
        );
    }
}

export default SimpleTextSolver;