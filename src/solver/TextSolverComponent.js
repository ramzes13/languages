import React from 'react';
import TinyMCE from 'react-tinymce';

class TextSolverComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    setupTinymce = (ed) => {
        ed.on('keyup', function(e) {
            console.log('Editor contents was modified. Contents: ' + ed.getContent({ format: 'text' }));
            // check_submit();
        });
    };

    render() {
        let that = this;

        return (
            <div>
                <TinyMCE
                    content=""
                    config={{
                        menubar: false,
                        plugins: '',
                        toolbar: 'undo redo',
                        setup: (e) => {that.setupTinymce(e)}
                    }}
                />
            </div>
        );
    }
}

export default TextSolverComponent;

