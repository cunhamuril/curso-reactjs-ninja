'use strict'
import React, { PropTypes } from 'react'

import Search from './search'
import Userinfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  isFetchingRepos,
  handleSearch,
  getRepos,
  getStarred
}) => (
    <div className="app">
      <Search isDisabled={isFetching} handleSearch={handleSearch} />

      {/* Se isFetching for true, mostre a div!
      Como os isFetching é um valor booleano, não precisa dos sinais !! */}
      {isFetching && <div>Carregando...</div>}

      {/* Com dois sinais !! converte qualquer valor da prop para boolean */}
      {!!userinfo && <Userinfo userinfo={userinfo} />}
      {!!userinfo &&
        <Actions
          getRepos={getRepos}
          getStarred={getStarred}
        />
      }

      {isFetchingRepos && <div>Carregando...</div>}

      {!!repos.length &&
        <Repos
          className="repos"
          title="Repositórios:"
          repos={repos}
        />
      }

      {!!starred.length &&
        <Repos
          className="starred"
          title="Favoritos:"
          repos={starred}
        />
      }
    </div>

  )

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchingRepos: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent