import React from 'react';
import PropTypes from 'prop-types'

const MarkdownEditorHeader = ({ onSave }) => (
  <header className="editor-header">
    <button onClick={onSave}>Salvar</button>
  </header>
);

MarkdownEditorHeader.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default MarkdownEditorHeader;