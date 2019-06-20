import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Sign from '../Sign';
import App from '../App';

const Router = () => (
    <BrowserRouter basename="/OeklaNIMFinder">
        <Switch>
            <Route exact path='/' component={Sign} />
            <Route path='/app' render={(props) =>
                localStorage.getItem('token') !== null ? <App {...props} /> : <Redirect to='/'/>
            }/>
        </Switch>
    </BrowserRouter>
)

export default Router;