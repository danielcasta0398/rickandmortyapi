import React from 'react';
import { useState, useEffect } from 'react';
import Search from './Search';
import UsersList from './UsersList';
import axios from 'axios';


const Home = () => {

    
    const [ key , setKey ] = useState({})      
    
    useEffect ( () => {  
        const random = Math.floor(Math.random()*126+1)    
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then( e => setKey(e.data) )
    },[ ])
   


    return (
        <div className='all-info'>            
            <div className='classImg'>
            <img src=" https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif " alt="" />
            </div>
            <h1 className='title'>Rick and Morty Wiki</h1>
            <Search setKey= {setKey} />
            <UsersList keyUsers= {key.residents} />
        </div>
    );
};

export default Home;