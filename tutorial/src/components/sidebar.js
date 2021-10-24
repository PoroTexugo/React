// Dependencies
import { useState, useEffect } from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const SideBar = () =>{
    const [categoryList, setCategoryList] = useState([]);    
    const [arrayItem, setArrayItem] = useState([]);
    const GetCategoryList = async () =>{
      
      const result = await fetch('http://localhost:7772/api/Product/GetProductTypeList',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json'
        },
      });    

      const categoryList = JSON.parse(await result.json());         
      setCategoryList(categoryList); 
      
      const array = [];      
      categoryList.forEach(category => {     
      array.push({title: category, itemId: category})});      
      setArrayItem(array.sort());      
    } 
  
 useEffect(async ()=> { 
     await GetCategoryList();         
    },[])   
    
    return (     
      <Navigation activeItemId="" onSelect={({itemId}) => {}} items = {arrayItem} />       
    );
  }

export default SideBar;