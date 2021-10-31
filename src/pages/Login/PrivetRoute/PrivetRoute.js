import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/Hook/useAuth';

const PrivetRoute = ({children, ...rest}) => {
    const {users, isLoading} = useAuth()
    if(isLoading){
        return <span class="visually-hidden">Loading...</span>
    }
    return (
        <Route
        {...rest}
        render={({location}) => users.email ? children: <Redirect
        to={{
            pathname:"/login",
            state:{from: location}
        }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivetRoute;