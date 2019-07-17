import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput, DateInput} from 'react-admin';
//import BookIcon from '@material-ui/core/svgIcon';
//export const PostIcon = BookIcon;
// ChipField, ReferenceManyField, SingleFieldList,

export const CategoryList = (props) => (
    <List {...props} sort={{ field: 'created_at', order: 'DESC' }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <EditButton basePath="/category" />
        </Datagrid>
    </List>
);

const CategoryTitle = ({ record }) => {
    return <span>Categories {record ? `"${record.title}"` : ''}</span>;
};

export const CategoryEdit = (props) => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <DateInput label="Publication date" source="created_at" />
        </SimpleForm>
    </Edit>
);

export const CategoryCreate = (props) => (
    <Create title="Create an article" {...props}>
        <SimpleForm>
        <TextInput source="title" />
            <DateInput label="Publication date" source="created_at" />
        </SimpleForm>
    </Create>
);