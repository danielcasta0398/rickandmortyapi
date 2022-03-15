import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const UsersInfo = ( {usersUrl} ) => {

    const [ infoUser , setInfoUser ] = useState(0)
      
     
     
    useEffect( () => {
        axios.get(usersUrl)
        .then(res => setInfoUser(res.data))
    },[] )

    return (   
            
        <div className="principal-card">
        <div className="images"> <img src={infoUser?.image} alt="" /></div> 
         <div className="text-info">
          <p> <b> {infoUser?.name} </b> </p>
          <p><b>Status:</b> {infoUser?.status} </p>
          <p><b>Origin: </b> {infoUser?.origin?.name} </p>
          <p><b>Number Episode: </b> {infoUser?.episode?.length} </p>
         </div>

      </div> 
               
                
        
    );
};

export default UsersInfo;