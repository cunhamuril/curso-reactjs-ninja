import React from "react";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/sobre">Sobre</Link>

      <Route path="/sobre" component={Sobre} />
    </div>
  );
}

const Sobre = () => <h1>Sobre</h1>;

export default App;
