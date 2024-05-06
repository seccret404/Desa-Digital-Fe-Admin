import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextEditorProps {
    editorState: EditorState;
    onEditorStateChange: (state: EditorState) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ editorState, onEditorStateChange }) => {
    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbar={{
                options: ['inline', 'list', 'textAlign', 'link', 'emoji'],
                inline: {
                    options: ['bold', 'italic', 'underline'],
                },
                list: {
                    options: ['unordered', 'ordered'],
                },
            }}
        />
    );
};

export default RichTextEditor;
