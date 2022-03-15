import React from 'react';
import { useState } from 'react';
import Search from './Search';
import UsersList from './UsersList';

const Home = () => {

    const urlApi = 'https://rickandmortyapi.com/api/location/'
    const [ key , setKey ] = useState({})  
    
    console.log(key)

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