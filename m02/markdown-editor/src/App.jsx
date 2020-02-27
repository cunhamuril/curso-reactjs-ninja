import React, { Component } from 'react';
import marked from 'marked'

import MarkdownEditor from './components/markdown-editor'

import './App.css';

import('highlight.js').then(hljs => {
  marked.setOptions({
    // hightlight serve para colorir blocos de código
    highlight: (code, lang) => {
      // Se a linguagem for passada, ele vai colorir conforme a linguagem
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }

      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }

    // Bind sendo feito dentro do constructor
    this.handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }

    this.getMarkup = () => {
      // Marked transforma o conteúdo de MD em HTML
      return { __html: marked(this.state.value) }
    }
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    );
  }

}

export default App;
