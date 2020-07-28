import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/CadastroVideo";
import CadastroCategoria from "./pages/CadastroCategoria";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Pagina404() {
  return (
    <div>
      <h1>Página 404</h1>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
