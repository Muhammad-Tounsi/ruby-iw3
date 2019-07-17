import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="administration" />
        <CardContent>Hello and welcome to the dashboard of this ruby on 
        rails backend application this front is build with react-admin you can modify, create and delete some
        articles, comments, categories and even user !</CardContent>
    </Card>
);