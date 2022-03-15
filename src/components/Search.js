import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Search = ( {url, setKey} ) => {

   const [ search, setSearch ] = useState("") 
  

   const searchtype = e => {
       e.preventDefault()
    axios.get(url + search )
    .then( res => {
        console.log(res);
        setKey(res.data) 
    })
   }

   

    return (
        <>          
                         
             <div  >
                <form className='search' action="">
                 <input className='search-input' type="text" onChange={e => setSearch(e.target.value)} placeholder="Ingresa un ID del 1 al 126" />
                 <button  onClick={ searchtype }><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
             </div>

         
        </>
    );
};

export default Search;