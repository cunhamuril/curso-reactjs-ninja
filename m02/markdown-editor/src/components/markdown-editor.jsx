import React from 'react';
import PropTypes from 'prop-types'

import Header from './markdown-editor-header'

const MarkdownEditor = ({ value, handleChange, getMarkup, handleSave }) => (
  <section className="editor">
    <Header onSave={handleSave} />

    <textarea
      value={value}
      onChange={handleChange}
      autoFocus // Automaticamente foca no elemento sem precisar clicar nele
    />

    {/* dangerouslySetInnerHTML -> HTML Parser */}
    <article className="view" dangerouslySetInnerHTML={getMarkup()} />
  </section>
);

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor;