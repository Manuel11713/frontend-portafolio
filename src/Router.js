import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//-----Views
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Skills from './Views/Skills/Skills';
import Contact from './Views/Contact/Contact';

const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;