import React from 'react';
import RichTextInput from "ra-input-rich-text";
import { ReferenceField, ShowButton, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, DateInput, NumberInput } from 'react-admin';
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
            <ReferenceField
                resource="articles"
                source="category_id"
                reference="categories"
            >
            <TextField source="title" />
            </ReferenceField>
            <EditButton basePath="/articles" />
            <ShowButton />
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
                <RichTextInput
                source="content"
                label=""
                addLabel={false}
                />
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