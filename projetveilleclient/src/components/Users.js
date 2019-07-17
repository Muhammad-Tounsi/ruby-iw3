import React from 'react';
import { ShowButton, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, DateInput} from 'react-admin';
//import BookIcon from '@material-ui/core/svgIcon';
//export const PostIcon = BookIcon;
// ChipField, ReferenceManyField, SingleFieldList,

export const UserList = (props) => (
    <List {...props} sort={{ field: 'created_at', order: 'DESC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="/users" />
            <ShowButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <DateInput source="Inscription date" source="created_at" />
            <TextInput source="password" />
            <TextInput source="password_digest" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create an article" {...props}>
        <SimpleForm>
        <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="password" />
            <TextInput source="password_digest" />
        </SimpleForm>
    </Create>
);