import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Sign from './Sign';
import App from '../App';
import { authenticate } from "./AuthUtil";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Sign} />
            <Route path='/home' render={(props) =>
                authenticate() === 1 ? <App {...props} /> : <Redirect to='/'/>
            }/>
        </Switch>
    </BrowserRouter>
)

export default Router;