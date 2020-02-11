import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

import './App.css'

import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
      isFetchingRepos: false
    }

    // função com bind recomendado pelo react
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    // console.dir(e.target) // mostra no console todas as propriedades de e.target

    // e.persist() // método para persistir o evento para que ele possa ser utilizado novamente dentro deste método
    // const target = e.target // ou pode armazenar numa variável que vai persistir do mesmo modo

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      // target.disabled = true
      ajax().get(this.getGitHubApiUrl(value))
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              repos: result.public_repos,
              photo: result.avatar_url,
              login: result.login,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        // após o método then pode existir o método error (para caso dê algum erro)
        // e tem o método always que é executado sempre que for chamado
        .always(() => {
          this.setState({ isFetching: false })
          // target.disabled = false              
        })
    }
  }

  getRepos(type) {
    return () => {
      this.setState({ isFetchingRepos: true })
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then(result => {
          this.setState({
            // [type] é o valor passado por parametro, representa o nome do state
            [type]: result.map(repo => {
              return {
                name: repo.name,
                link: repo.html_url
              }
            })
          })
        })
        .always(() => {
          this.setState({ isFetchingRepos: false })
        })
    }

  }

  render() {
    return (
      <AppContent
        {...this.state} // esta linha substitui as proximas 5 linhas -> spread operator
        // userinfo={this.state.userinfo}
        // repos={this.state.repos}
        // starred={this.state.starred}
        // isFetching={this.state.isFetching}
        // isFetchingRepos={this.state.isFetchingRepos}


        // handleSearch={e => this.handleSearch(e)} // ao invés de fazer assim
        handleSearch={this.handleSearch} // o recomendado pelo react é fazer o bind no constructor, assim
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}

export default App
