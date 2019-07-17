import React from 'react';
import { Route } from 'react-router-dom';
import register from './Auth/register';

export default [
    <Route exact path="/register" component={register} />,
    //<Route exact path="/baz" component={Baz} noLayout />,
];