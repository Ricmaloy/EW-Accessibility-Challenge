import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GoodCard from './pages/GoodCard';
import EvilCard from './pages/EvilCard';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/Evil" exact>
                <EvilCard/>
            </Route>
            <Route path="/Good" exact>
                <GoodCard/>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;