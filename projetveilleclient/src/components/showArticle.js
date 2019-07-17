import React from 'react';
import {
Datagrid,
DateField,
ShowButton,
ReferenceManyField,
RichTextField,
Show,
Tab,
TabbedShowLayout,
TextField
} from 'react-admin';
import AddCommentButton from './AddCommentButton.js';

const ArticleShow = props => (
<Show {...props}>
    <TabbedShowLayout>
    <Tab label="Summary">
    <TextField source="id" />
    <TextField source="title" />
    <TextField source="content" />
    <TextField source="created_by" />
    <DateField source="created_at" />
    <DateField source="updated_at" />
    </Tab>
    <Tab label="content" path="content">
        <RichTextField
        source="content"
        stripTags={false}
        label=""
        addLabel={false}
        />
    </Tab>
    <Tab label="Comments" path="comments">
        <ReferenceManyField
        addLabel={false}
        //resource="comments"
        //source="article_id"
        reference="comments"
        target="article_id"
        sort={{ field: 'created_at', order: 'DESC' }}
        >
        <Datagrid>
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="message" />
            <ShowButton />
        </Datagrid>
        </ReferenceManyField>
        <AddCommentButton />
    </Tab>
    </TabbedShowLayout>
</Show>
);

export default ArticleShow;
