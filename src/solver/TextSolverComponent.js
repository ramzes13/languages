import React from 'react';
import TinyMCE from 'react-tinymce';
const Jsdiff = require('diff');

class TextSolverComponent extends React.Component {

    ed = null;

    constructor(props) {
        super(props);

        this.checkContent = this.checkContent.bind(this);
    }

    setupTinymce = (ed) => {
        this.ed = ed;
        //
        // ed.on('keyup', function (e) {
        //     console.log('Editor contents was modified. Contents: ' + ed.getContent({format: 'text'}));
        //     // check_submit();
        // });
    };

    _generateIncorrectText(text) {
        return '<span class="tinymce-span-grey">' + text + '</span>';
    }

    _generateDiffText(editorText, firstDiff) {
        let afterDiffText = editorText.substring(0, firstDiff.value.length);
        let incorrectText = editorText.substring(firstDiff.value.length);

        if (incorrectText) {
            afterDiffText += this._generateIncorrectText(incorrectText);
        }

        return afterDiffText;
    }

    checkContent() {
        let editorText = this._getEditorText(),
            diff = Jsdiff.diffChars(editorText.toLowerCase(), this.props.initialText.toLowerCase()),
            firstDiff = diff.shift(),
            afterDiffText;

        console.log(firstDiff);
        if (firstDiff && !firstDiff.added && !firstDiff.removed) {
            afterDiffText = this._generateDiffText(editorText, firstDiff);
        } else {
            afterDiffText = this._generateIncorrectText(editorText);
        }

        this._setEditorText(afterDiffText);
    }

    _getEditorText() {
        let editorText = this.ed.getContent({format: 'text'});
        return editorText.replace(/(\r\n|\n|\r)/gm, "");
    }

    _setEditorText(text) {
        this.ed.setContent(text);
    }

    render() {
        let that = this;

        return (
            <div>
                <TinyMCE
                    content=""
                    config={{
                        content_css : '/tinymce.css',
                        menubar: false,
                        plugins: '',
                        toolbar: 'undo redo',
                        setup: (e) => {
                            that.setupTinymce(e)
                        }
                    }}
                />
                <button onClick={this.checkContent}>Check text</button>
            </div>
        );
    }
}

export default TextSolverComponent;

