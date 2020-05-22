import React from "react";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </ul>

      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/blog" component={Blog} />
    </div>
  );
}

const Home = () => <h1>Home</h1>;

const Sobre = () => <h1>Sobre</h1>;

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

    <Route path="/blog/:post" component={Post} />
    <Route path="/blog" exact component={NoPosts} />
  </>
);

const Post = ({ match }) => <h2>{match.params.post}</h2>;

const NoPosts = () => <h2>Selecione um post!</h2>;

export default App;
