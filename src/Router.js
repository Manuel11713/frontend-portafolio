import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//-----Views
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Works from './Views/Works/Works';
import Skills from './Views/Skills/Skills';
import Contact from './Views/Contact/Contact';
import Certifieds from './Views/Certifieds/Certifieds';
const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/works" component={Works}/>
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/certifieds/:path" render={(props)=>{
                    const {path} = props.match.params;
                    return(
                        <Certifieds path={path}/>
                    )}}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;