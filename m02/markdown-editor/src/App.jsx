import React, { Component } from "react";
import marked from "marked";
import { v4 } from "node-uuid";

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
    //
    this.clearState = () => ({
      value: "",
      id: v4() // v4 gera um hash aleatório
    });

    this.state = {
      ...this.clearState(),
      isSaving: null
    };

    // Bind sendo feito dentro do constructor
    this.handleChange = e => {
      this.setState({
        value: e.target.value,
        isSaving: true
      });
    };

    // Marked transforma o conteúdo de MD em HTML
    this.getMarkup = () => {
      return { __html: marked(this.state.value) };
    };

    // Salvar no localStorage
    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value);

        this.setState({ isSaving: false });
      }
    };

    // Criar um novo
    this.createNew = () => {
      this.setState(this.clearState());
      this.textarea.focus(); // Focar no textarea
    };

    // Remover value do md
    this.handleRemove = () => {
      localStorage.removeItem(this.state.id);
      this.createNew();
    };

    this.handleCreate = () => {
      this.createNew();
    };

    // Referência do textarae
    this.textareaRef = node => {
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
