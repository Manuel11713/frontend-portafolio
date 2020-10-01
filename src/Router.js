import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//-----Views
import Home from './Views/Home/Home';
import Skills from './Views/Skills/Skills';

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/skills" component={Skills}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;