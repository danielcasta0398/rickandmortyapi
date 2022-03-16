import React from 'react';

const LocationInfo = ( {location} ) => {     

    return (
        <div className='content-location'>
            <h1 className='title-locationinfo'> {location?.name} </h1>
            <div className='card-location'>
                <p><b>Type: </b>{location?.type}</p>
                <p><b>Dimension: </b>{location?.dimension}</p>
                <p><b>Number Residents: </b>{location.residents?.length}</p>
            </div>
        </div>
    );
};

export default LocationInfo;