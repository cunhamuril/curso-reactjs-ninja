import React from 'react';

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map(repo => (
        <li key={repo.link}>
          <a href={repo.link} target="_blank" rel="noopener noreferrer">{repo.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '',
  title: ''
}

export default Repos;
