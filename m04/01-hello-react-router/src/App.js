import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import "./App.css";

const Link = (props) => (
  /**
   * activeClassName: nome da classe de link ativo. Default is 'active'
   * activeStyle: estilo inline de link ativo
   * exact: funciona igual o exact da routes. Só vai tornar ativa se renderizar exatamente esssa rota
   */
  <NavLink
    activeClassName="active-link"
    activeStyle={{ color: "red" }}
    {...props}
  />
);

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" exact>
            Home
          </Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />
        {/*
          (sobre|contato): operador OR de RegEx
          Vai renderizar Sobre OR Contato
        */}
        <Route exact path="/(sobre|contato)" component={Page} />
        <Route path="/blog" component={Blog} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

const Error404 = () => <h1>Página Não Encontrada</h1>;

const Home = () => <h1>Home</h1>;

const Page = ({ match }) => {
  console.log(match);

  return <h1>{match.url}</h1>;
};

const Blog = () => (
  <>
    <h1>Blog</h1>

    <small>
      <ul>
        <li>
          <Link to="/blog/post-1">Post 1</Link>
        </li>
        <li>
          <Link to="/blog/post-2">Post 2</Link>
        </li>
      </ul>
    </small>

    <Switch>
      {/*
        (post-[12]): RegEx
        Só vai renderizar post-1 OR post-2
      */}
      <Route path="/blog/:post(post-[12])" component={Post} />
      <Route
        path="/blog"
        exact
        render={(props) => <NoPosts numberOfPosts={2} {...props} />}
      />
      <Route component={Post404} />
    </Switch>
  </>
);

const Post404 = () => <h1>Esse post não existe</h1>;

const Post = ({ match }) => <h2>{match.params.post}</h2>;

const NoPosts = ({ numberOfPosts }) => (
  <h2>Selecione um dos {numberOfPosts} posts!</h2>
);

export default App;
