import React, { Component } from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate } from './components/articles';
import {CategoryList, CategoryCreate, CategoryEdit} from './components/categories';
import {CommentList, CommentCreate, CommentEdit} from './components/comments';
import authProvider from './Auth/authProvider';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.user = {
        authenticated: true,
        token: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NjMyOTMxMDR9.l95ea9CIF2kwD6QGgzhv2VEu0VVtqofUyxDYSxPUEag'
    };
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
    
};
const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);


class App extends Component {

render() {
    return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="articles" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
    <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} />
    </Admin>
    );
}
}

export default App;