import React from 'react';
import TinyMCE from 'react-tinymce';
import TtsSControl from './TTSControl';

class SimpleTextSolver extends React.Component {
    generateTextMeta(text) {

    }
    constructor(props) {
        super(props);
        this.state = props.data;

        console.log(props.data.text);
    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    };

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
                    <TtsSControl configureTTS={this.configureTTS} ttsText={this.props.data.text}/>
                </div>
            </div>

        );
    }
}

export default SimpleTextSolver;