import React from 'react';
import UsersInfo from './UsersInfo';

const UsersList = ( {keyUsers} ) => {
    

    return (
        <div className='principal' key={keyUsers}>
           {
               keyUsers?.map( user => (
                 <UsersInfo usersUrl = {user} key={ user } /> 
               ) )
           }
        </div>
    );
};

export default UsersList;