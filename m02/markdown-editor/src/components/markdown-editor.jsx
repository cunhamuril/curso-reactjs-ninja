import React from 'react';
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className="editor">
    <textarea
      value={value}
      onChange={handleChange}
      autoFocus // Automaticamente foca no elemento sem precisar clicar nele
    />

    {/* dangerouslySetInnerHTML -> HTML Parser */}
    <div className="view" dangerouslySetInnerHTML={getMarkup()} />
  </div >
);

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default MarkdownEditor;