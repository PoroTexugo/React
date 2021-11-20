// Dependencies
import { useState, useEffect } from "react";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const SideBar = (props) => {

    const [categoryList, setCategoryList] = useState([]);    
    const [arrayItem, setArrayItem] = useState([]);
    
    const GetCategoryList = () => {      

      var myHeaders = new Headers();
      myHeaders.append("content-Type", " application/json");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,     
      };  

      fetch("http://localhost:7772/api/Product/GetProductTypeList", requestOptions)
        .then(response =>  response.text())
        .then(result => setCategoryList(JSON.parse(result)))
    }
       
      //     const array = [];   
      //     categoryList.forEach(category => {     
      //       array.push({title: category, itemId: category})
      //     });      
      //     setArrayItem(array.sort());            
      //     })                         
      //     .catch(error => console.log('error', error));    
      // };   
      
      useEffect(() => { 
        GetCategoryList();
      });     
      
      return (     
        <Navigation activeItemId=""
         onSelect={({itemId}) => {props.GetProductList(itemId)}}
         items = {arrayItem} />       
      );
    }
      


export default SideBar;