import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import Projetos from './pages/projetos';
import ProjetosReact from './pages/projetos/projetosReact';
import ProjetosReactNode from './pages/projetos/projetosNode';
import ProjetosReactNative from './pages/projetos/projetosReactNative';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/sobre" component={Sobre}></Route>
            <Route exact path="/projetos" component={Projetos}></Route>
            <Route exact path="/contato" component={Contato}></Route>
            <Route exact path="/projetos/react" component={ProjetosReact}></Route>
            <Route exact path="/projetos/node" component={ProjetosReactNode}></Route>
            <Route exact path="/projetos/react-native" component={ProjetosReactNative}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;