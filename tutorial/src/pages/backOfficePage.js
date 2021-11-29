import * as React from "react";
import { Admin, Resource } from 'react-admin';
import dataProvider from '../dataProvider';
import { ProductList, ProductShow } from "./posts";

const BackOfficePage = () => {
    
    return(       
        <Admin dataProvider={dataProvider}>         
            <Resource  name="Product"  
                create={ProductList} 
                list={ProductList} 
                edit={ProductList}
                options={{ label: 'Product'}} 
                show={ProductShow} 
            />          
        </Admin>       
    );
}

export default BackOfficePage;