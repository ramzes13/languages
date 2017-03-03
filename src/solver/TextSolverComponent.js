import React from 'react';
import TinyMCE from 'react-tinymce';
const Jsdiff = require('diff');

class TextSolverComponent extends React.Component {

    ed = null;
    contentChecked: false;

    constructor(props) {
        super(props);

        this.checkContent = this.checkContent.bind(this);
        this.tinymceKeyup = this.tinymceKeyup.bind(this);
    }

    tinymceKeyup(e) {
        if (this.contentChecked) {
            this._editorRemoveDiffMeta();
            this.contentChecked = false;
        }
    }

    setupTinymce = (ed) => {
        this.ed = ed;

        this.ed.on('click', this.tinymceKeyup);
        this.ed.on('keyup', this.tinymceKeyup);
    };

    _generateDiffMeta(editorText, firstDiff) {
        let diffMetaText = {
            good: '',
            wrong: ''
        };

        if (firstDiff && !firstDiff.added && !firstDiff.removed) {
            diffMetaText.good = editorText.substring(0, firstDiff.value.length);

            diffMetaText.wrong = editorText.substring(firstDiff.value.length);
        } else {
            diffMetaText.wrong = editorText;
        }

        return diffMetaText;
    }

    checkContent() {
        let editorText = this._getEditorText(),
            diff = Jsdiff.diffChars(editorText.toLowerCase(), this.props.initialText.toLowerCase()),
            afterDiffMeta = this._generateDiffMeta(editorText, diff.shift());

        this._setEditorDiffMeta(afterDiffMeta);

        this.contentChecked = true;

    }

    _getEditorText() {
        return this.ed.getContent({format: 'text'});
    }

    _setEditorDiffMeta(textMeta) {
        let rootElement = this.ed.dom.getRoot(),

            goodEl = this.ed.dom.create('span', {}, textMeta.good),
            badEl = this.ed.dom.create('span', {'class': 'tinymce-span-grey'}, textMeta.wrong);

        rootElement.innerHTML = '';
        rootElement.appendChild(goodEl);
        rootElement.appendChild(badEl);

        this.ed.selection.setCursorLocation(badEl, 0);
        this.ed.focus();
    }

    _editorRemoveDiffMeta() {
        this.ed.dom.removeClass(this.ed.dom.select('span.tinymce-span-grey'), 'tinymce-span-grey');
    }

    render() {

        console.log('text solever component render');
        let that = this;

        return (
            <div>
                <TinyMCE
                    content=""
                    config={{
                        content_css: '/tinymce.css',
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

