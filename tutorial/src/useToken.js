import { useState } from 'react';

export default function useToken() {
  
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token'); 
    
    if(tokenString != null){      
      const userToken = JSON.parse(tokenString);    
      return userToken?.token; 
    }
    else{      
      return null;
    }
  };

  const [token, setToken] = useState(getToken()); 
  
  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));    
    setToken(userToken.token); 
    console.log('ran');
  };


  return {
    setToken: saveToken,
     token
  }
}