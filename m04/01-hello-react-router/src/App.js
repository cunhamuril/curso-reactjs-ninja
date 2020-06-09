import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

const Link = (props) => (
  /**
   * activeClassName: nome da classe de link ativo. Default is 'active'
   * activeStyle: estilo inline de link ativo
   * exact: funciona igual o exact da routes. Só vai tornar ativa se renderizar exatamente esssa rota
   */
  // <NavLink
  //   activeClassName="active-link"
  //   activeStyle={{ color: "red" }}
  //   {...props}
  // />

  /**
   * Demonstração de +/- como funciona o NavLink, utilizando prop Children do Route
   */
  <Route path={props.to} exact={props.exact}>
    {({ match, history }) => (
      <a
        href={props.to}
        style={match ? { color: "red" } : null}
        onClick={(e) => {
          e.preventDefault();

          // Segundo argumento (opcional) é o state que pode ser passado
          history.push(props.to, { link: "Link" });

          // Replace: Parecido com o Push, porém não vai adicionar a página anterior na pilha do histórico do navegador
          // history.replace(props.to, { link: "Link" });
        }}
      >
        {props.children}
      </a>
    )}
  </Route>
);

function App({ history }) {
  return (
    <div className="App">
      <Route>
        {({ history }) => (
          <ul>
            <li>
              {/* goBack(): método do history que volta para página anterior, como o botão de voltar do navegador */}
              <button onClick={() => history.goBack()}>{"<-"} Voltar</button>

              {/* goForward(): contrário de goBack, ao invés de voltar pra página anterior, vai para página seguindo histórico */}
              <button onClick={() => history.goForward()}>
                Próxima Página {"->"}
              </button>
            </li>

            <li>
              {/* go(n): Manda para o número da página no histórico. Por exemplo: a página atual é 0, 1 é a próxima e -1 é a anterior */}
              <button onClick={() => history.go(-1)}>{"<-"} Voltar</button>
              <button onClick={() => history.go(1)}>
                Próxima Página {"->"}
              </button>
            </li>
          </ul>
        )}
      </Route>

      <ul>
        <li>
          <Link
            to={{
              // Passando state por rota
              pathname: "/",
              state: { id: "home" },
              search: "?name=Murilo",
            }}
            exact
          >
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

        {/* Exemplo de âncora com Hash. Vai ancorar no elemento que tem o id passado no href */}
        <li>
          <a href="#informacoes-do-site">Informações do Site</a>
        </li>

        <li>
          <Link to="/voltar-para-home">Voltar para home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact component={Home} />

        <Redirect from="/voltar-para-home" to="/" />

        {/*
          (sobre|contato): operador OR de RegEx
          (1|2)? : vai ter que ser um ou dois, e o simbolo de interrogação diz que é opcional
          Vai renderizar Sobre OR Contato
        
          <Route exact path="/(sobre|contato)/(1|2)?" component={Page} />
        */}
        <Route exact path="/(sobre|contato)/:id?" component={Page} />
        <Route path="/blog" component={Blog} />
        {/*<Route
          path="/voltar-para-home"
          render={() => <Redirect push to="/" />}
        />*/}
        <Route component={Error404} />
      </Switch>

      {/**
       * Prop Children: sempre vai aparecer na página, mas a prop Match só vai aparecer
       * quando estiver de fato na página especificada.
       */}
      <Route path="/sobre">
        {({ match }) => (
          <pre>
            {/* console.log("Estou na página sobre!", match) */}
            Estou na página sobre!
          </pre>
        )}
      </Route>

      <div id="informacoes-do-site">
        <h2>Informações do site</h2>
      </div>
    </div>
  );
}

const Error404 = () => <h1>Página Não Encontrada</h1>;

const Home = ({ match, location, history }) => (
  <div>
    {console.log("Home history:", history)}
    {/* console.log("Home location:", location) */}

    {/**
     * Pegar o valor da Query String da URL e transformar em um objeto
     * exemplo da Query string: ?name=Murilo&id=1&city=Guarei
     *
     * replace: substituir ? por nada
     * split: dividir pelos & e colocar em um Array
     * reduce: pegar a chave e valor dos itens e reduzir tudo em um objeto
     */}
    {console.log(
      "Location search:",
      location.search
        .replace("?", "")
        .split("&")
        .reduce((acc, item) => {
          const [key, value] = item.split("=");
          acc[key] = value;
          return acc;
        }, {})
    )}
    {/* console.log("Home match:", match) */}
    <h1>Home</h1>
  </div>
);

const Page = ({ match, location, history }) => (
  <div>
    {console.log("Page history", history)}
    {/*console.log("Page location:", location)*/}
    {/* console.log("Page match:", match) */}
    <h1>{match.url}</h1>
  </div>
);

// let blogMatch = null;
const Blog = ({ match, location, history }) => (
  <>
    {console.log("Blog history", history)}
    {/*console.log("Blog location:", location)*/}
    {/*console.log("Blog match:", (blogMatch = match))*/}
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

const Post404 = ({ match, location, history }) => (
  <div>
    {console.log("Post404 history", history)}
    {/*console.log("Post404 location:", location)*/}
    {/*console.log(
      "Post404 match:",
      match,
      "Post404 match é o mesmo do blog?",
      match === blogMatch
    )*/}
    <h1>Esse post não existe</h1>
  </div>
);

const Post = ({ match, location, history }) => (
  <div>
    {console.log("Post history", history)}
    {/*console.log("Post location:", location)*/}
    {/* console.log("Post match:", match) */}
    <h2>{match.params.post}</h2>
  </div>
);

const NoPosts = ({ match, location, history, numberOfPosts }) => (
  <div>
    {console.log("NoPosts history", history)}
    {console.log("NoPosts location:", location)}
    {/* console.log("NoPosts match:", match) */}
    <h2>Selecione um dos {numberOfPosts} posts!</h2>
  </div>
);

export default App;
