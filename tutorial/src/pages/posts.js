import * as React from "react";
import { List, Datagrid, TextField, Show, SimpleShowLayout, DateField } from 'react-admin';

export function ProductList (props) {  
    
    return (   
        <List {...props}  >
            <Datagrid rowClick="edit">
                <TextField source="Id" /> 
                <TextField source="Name" />          
                <TextField source="Price" />
                <TextField source="ProductType" />
            </Datagrid>
        </List>             
       )   
    };
    
export function ProductShow(props) {

    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="Name" />
                <TextField source="Price" />
            </SimpleShowLayout>
        </Show>
    )
};  

    
    // export const S = (props) => (
    //     <Create {...props}>
    //         <SimpleForm>
    //             <TextInput source="Name" />
    //             <TextInput source="Image" options={{ multiLine: true }} />
    //             <TextInput source="Pric" />
    //             <RichTextInput source="body" />
    //             <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
    //         </SimpleForm>
    //     </Create>
    // );

