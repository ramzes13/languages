import React from 'react';
import TinyMCE from 'react-tinymce';
import TTSSControl from './TTSControl';
import SimpleTextSolverPhrase from './SimpleTextSolverPhrase';

class SimpleTextSolver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayTTSConfig: true,
            data: props.data,
            textMeta: [],
            currentElement: 0,
        };

        this.getTextByPosition = this.getTextByPosition.bind(this);
        this.onTextMetaReady = this.onTextMetaReady.bind(this);
    }

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    };

    onTextMetaReady(data) {
        this.setState((prevState) => {
            return {
                textMeta: data
            }
        })
    }

    getTextByPosition(position) {
        return this.state.textMeta[position];
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
                    <SimpleTextSolverPhrase text={this.state.data.text} onTextMetaReady={this.onTextMetaReady}/>
                    <TTSSControl totalElements={this.state.textMeta.length}
                                 getTextByPosition={this.getTextByPosition}/>
                </div>
            </div>
        );
    }
}

export default SimpleTextSolver;