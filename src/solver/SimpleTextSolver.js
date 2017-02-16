import React from 'react';
import TinyMCE from 'react-tinymce';
import SimpleTextTTS from './SimpleTextTTS';

class SimpleTextSolver extends React.Component {

    constructor(props) {
        super(props);

        let temp = new SimpleTextTTS();
    }
    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    };

    render() {
        let test = this.props.data.text;
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
                    <h2>TTS configure</h2>
                </div>
            </div>

        );
    }
}

export default SimpleTextSolver;