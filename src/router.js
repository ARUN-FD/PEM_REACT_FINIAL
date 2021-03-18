import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';

import Login from './Components/Login/Login'
import Register from './Components/Register/Register';
import Checkout from './Components/Setup/CheckOut';

function router() {
    return (
        <Router>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/checkout"} component={Checkout} />
        </Router>
    )
}

export default router
