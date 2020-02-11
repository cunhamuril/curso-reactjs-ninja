import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'

import MarkdownEditor from './components/markdown-editor'

import './App.css';

marked.setOptions({
  // hightlight serve para colorir blocos de código
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
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
