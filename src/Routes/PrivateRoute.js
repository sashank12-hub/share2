import React   from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from './auth';

function PrivateRoute({ path, Component }) {

    return (
        <Route path={path} exact
        render={props => isAuth() ?
        <Component {...props}  /> :
        <Redirect to="/kafene" />
        }
        />
        
    )
}

export default PrivateRoute;