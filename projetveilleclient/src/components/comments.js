import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, DateInput, NumberInput } from 'react-admin';
//import BookIcon from '@material-ui/core/svgIcon';
//export const PostIcon = BookIcon;
// ChipField, ReferenceManyField, SingleFieldList,

export const CommentList = (props) => (
    <List {...props} sort={{ field: 'created_at', order: 'DESC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="message" />
            <TextField source="name" />
            <TextField source="article_id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="/comment" />
        </Datagrid>
    </List>
);

const CommentTitle = ({ record }) => {
    return <span>Comments {record ? `"${record.title}"` : ''}</span>;
};

export const CommentEdit = (props) => (
    <Edit title={<CommentTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <DisabledInput source="article_id" />
            <TextInput source="message" />
            <DisabledInput source="name" />
            <DateInput label="Publication date" source="created_at" />
            <DateInput label="Publication date" source="updated_at" />
        </SimpleForm>
    </Edit>
);

export const CommentCreate = (props) => (
    <Create title="Create an article" {...props}>
        <SimpleForm>
        <TextInput source="title" />
            <TextInput source="message" />
            <DateInput label="Publication date" source="created_at" />
            <DateInput label="Publication date" source="updated_at" />
        </SimpleForm>
    </Create>
);