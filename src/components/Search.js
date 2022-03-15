import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Search = ( {url, setKey} ) => {

   const [ search, setSearch ] = useState("3") 
   const [ typeUsers, setTypeUsers ] = useState("") 

   const searchtype = () => {
    axios.get(url + search )
    .then( res => setKey(res.data) )
   }

   

    return (
        <>          
                         
             <div  >
                <form className='search' action="">
                 <input className='search-input' type="text" onChange={e => setSearch(e.target.value)} />
                 <button  type='submit' onClick={ searchtype }><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
             </div>

         
        </>
    );
};

export default Search;