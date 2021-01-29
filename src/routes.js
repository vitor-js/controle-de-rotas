import React from "react";
import { isUserAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


// Aqui vai ser feito o elemento Private Route 
// Aqui passamos o component de dentro do PrivateRoute que esta dentro do swith logo abaixo , no caso o que vc quer renderizar 
// Mas antes de redenrizar ele verifica se o usúario esta com o token no storage ou nao 
// Para efetuar o login vc apenas precisa criar uma rota de login , fazer sua requisição e salvar no localstorage o token
// Quando isso estiver feito redirecione ele para alguma rota restrita e dai vc tem o controle de eutenticação do seu aplicativo :)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello World</h1>} />
      <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;