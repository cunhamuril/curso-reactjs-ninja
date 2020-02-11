import React from 'react';

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img src={userinfo.photo} alt="avatar" />
    <h1 className="username">
      <a href={`https://github.com/${userinfo.login}`} target="_blank" rel="noopener noreferrer">
        {userinfo.username}
      </a>
    </h1>
    <ul className="repos-info">
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

export default UserInfo;
