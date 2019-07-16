import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, DateInput, NumberInput } from 'react-admin';
//import BookIcon from '@material-ui/core/svgIcon';
//export const PostIcon = BookIcon;
// ChipField, ReferenceManyField, SingleFieldList,

export const PostList = (props) => (
    <List {...props} sort={{ field: 'created_at', order: 'DESC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="content" />
            <TextField source="created_by" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="category_id" />
            {/* <ReferenceManyField label="Category" reference="category_id" target="category_id">
                <SingleFieldList>
                    <ChipField source="category_id" />
                </SingleFieldList>
            </ReferenceManyField> */}
            <EditButton basePath="/articles" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Articles {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="content" />
            <DateInput label="Publication date" source="created_at" />
            <TextInput source="category_id" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create title="Create an article" {...props}>
        <SimpleForm>
        <TextInput source="title" />
            <TextInput source="content" />
            <TextInput source="created_by" />
            <DateInput label="Publication date" source="created_at" />
            <NumberInput source="category_id" />
        </SimpleForm>
    </Create>
);