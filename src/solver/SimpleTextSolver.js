import React from 'react';
import TinyMCE from 'react-tinymce';

class SimpleTextSolver extends React.Component {

    handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    render() {
        return (
            <TinyMCE
                content="<p>This is the initial content of the editor</p>"
                config={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}

export default SimpleTextSolver;