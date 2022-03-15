import React from 'react';
import { useState, useEffect } from 'react';
import Search from './Search';
import UsersList from './UsersList';
import axios from 'axios';


const Home = () => {

    const random = Math.floor(Math.random()*126+1)   
    const urlApi = `https://rickandmortyapi.com/api/location/${random}`
    const [ key , setKey ] = useState({})      
    
    useEffect ( () => {                        
        axios.get(urlApi)
        .then ( e => setKey(e.data) )
    },[""])
   


    return (
        <div className='all-info'>            
            <div className='classImg'>
            <img src=" https://media.giphy.com/media/l378BzHA5FwWFXVSg/giphy.gif " alt="" />
            </div>
            <h1 className='title'>Rick and Morty Wiki</h1>
            <Search url={ urlApi } setKey= {setKey} />
            <UsersList keyUsers= {key.residents} />
        </div>
    );
};

export default Home;