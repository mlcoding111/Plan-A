import React, { useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {

    const mapStyles = {
        width: '100%',
        height: '60%',
        position: 'relative'
    };


    return (
        <div>
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: props.lat, lng: props.long }}
                center={{ lat: props.lat, lng: props.long }}
            //   initialCenter={{ lat: 48.239899, lng: -79.022629}}
            >
                <Marker position={{ lat: 48.239899, lng: -79.022629 }} />
                <Marker position={{ lat: 48.102711, lng: -77.787842 }} />
                <Marker position={{ lat: 48.571911, lng: -78.115982 }} />
                <Marker position={{ lat: 48.8131, lng: -79.2026 }} />
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBaXaMf3m5xViJTkQmHpvovMyV2vw_M2d4'
})(MapContainer);
