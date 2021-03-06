import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';


const PriveteRoute = ({ children, ...rest }) => {
    const {user, isLoading} = UseAuth()
    if(isLoading){
        return <Spinner animation="border" />
    }
    return (
        <Route
        {...rest}
        render={({ location }) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        ></Redirect>

        }
    >

    </Route>
    );
};

export default PriveteRoute;