import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import error404 from './assets/images/error404.png';
import Button from './components/Button';

const Pagina404 = () => (
  <>
    <div className="error-404">
      <img className="img-error" src={error404} alt="404" />
    </div>
    <div className="back">
      <Button as={Link} className="ButtonBack" to="/">Back To Home</Button>
    </div>
  </>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
