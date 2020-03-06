import React, { Component } from "react";
import marked from "marked";

import MarkdownEditor from "./views/markdown-editor";

import "./App.css";

import("highlight.js").then(hljs => {
  marked.setOptions({
    // hightlight serve para colorir blocos de código
    highlight: (code, lang) => {
      // Se a linguagem for passada, ele vai colorir conforme a linguagem
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value;
      }

      return hljs.highlightAuto(code).value;
    }
  });
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      isSaving: null
    };

    // Bind sendo feito dentro do constructor
    this.handleChange = e => {
      this.setState({
        value: e.target.value,
        isSaving: true
      });
    };

    this.getMarkup = () => {
      // Marked transforma o conteúdo de MD em HTML
      return { __html: marked(this.state.value) };
    };

    this.handleSave = () => {
      if (this.state.isSaving) {
        // Salvar no localStorage
        localStorage.setItem("md", this.state.value);

        this.setState({ isSaving: false });
      }
    };

    this.handleRemove = () => {
      // Remover value do md
      localStorage.removeItem("md");

      this.setState({ value: "" });
    };

    this.handleCreate = () => {
      // Criar novo
      this.setState({ value: "" });
      this.textarea.focus(); // Focar no textarea
    };

    this.textareaRef = node => {
      // Referência do textarae
      this.textarea = node;
    };
  }

  componentDidMount() {
    // Pegar valor da chave md
    const value = localStorage.getItem("md");
    this.setState({ value: value || "" });
  }

  componentDidUpdate() {
    // limpar intervalo
    clearInterval(this.timer);
    // salvar depois de 1s quando parar de igitar
    this.timer = setTimeout(() => this.handleSave(), 300);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
      />
    );
  }
}

export default App;
