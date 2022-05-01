import React, { useState } from 'react'
import { Map } from 'react-map-gl'
import { Marker } from 'react-map-gl'
import { Popup } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css"
import { getCenter } from 'geolib'

function Maps({searchResults}) {
    const[selectedLocation, setSelectionLocation] = useState({});
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude : result.lat,
    }));
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
      longitude: center.longitude,
      latitude: center.latitude,
      zoom: 11
    });
  return (
    <Map
    mapStyle="mapbox://styles/stuwartbrain/cl2mxqip1000y14umo17c75o5"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove = {evt => setViewport(evt.viewport)}
    >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft = {-20}
                        offsetTop = {-10}
                    >
                        <p
                        onClick = { () => setSelectionLocation(result) }
                        role='img'
                        className='cursor-pointer tet-2xl animate-bounce'
                        aria-label='push-pin'
                        >📍</p>
                    
                    </Marker>
                {selectedLocation.long === result.long ? (
                        <Popup 
                        onClose={() => setSelectionLocation({})}
                        closeOnClick = {true}
                        latitude = {result.lat}
                        longitude = {result.long}>
                            {result.title}
                        </Popup>
                ) : (
                    false
                ) }
                    </div>
            ))}
    </Map>
  )
}

export default Maps