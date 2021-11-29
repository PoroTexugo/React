// Dependencies
import { useState, useEffect } from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const SideBar = (props) => {
   
    const [arrayItem, setArrayItem] = useState([]);
    
    const GetCategoryList = async () => {  
      var myHeaders = new Headers();
      myHeaders.append("content-Type", " application/json");  
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,       
      };  
      const response =  await fetch("http://localhost:7772/api/Product/GetProductTypeList", requestOptions)              
      const result = await response.json();     
      const array = [];   
      result.forEach(category => {     
        array.push({title: category, itemId: category})
      });      
      setArrayItem(array.sort());    
    }       
    
    useEffect(() => { 
      GetCategoryList();
    },[]);     

      return (     
        <Navigation activeItemId=""
         onSelect={({itemId}) => {props.GetProductList(itemId)}}
         items = {arrayItem} />         
      );
    }
      


export default SideBar;