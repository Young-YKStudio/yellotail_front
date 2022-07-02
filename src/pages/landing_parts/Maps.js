// TODO: move this to the footer

import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React from 'react';
import restaurantData from '../../Data/Restaurant.json';

const mapContainerStyle = {
  width: '100%',
  height: '50vh',
}

const Maps = (props) => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  })

  const [ showInfoWindow, setShowInfoWindow ] = React.useState(true);

  if(loadError) return 'Error';
  if(!isLoaded) return 'Loading...';
  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={{ lat: restaurantData[0].lat, lng: restaurantData[0].lng }}
      >
        <Marker 
          position={{ lat: restaurantData[0].lat, lng: restaurantData[0].lng }}
          onClick={(e) => {setShowInfoWindow(false)}}
        />
        {showInfoWindow ? (
          <InfoWindow
            position={{ lat: restaurantData[0].lat+0.0006, lng: restaurantData[0].lng }}
            onCloseClick={(e) =>{setShowInfoWindow(false)}}
          >
            <div>
              <h3>
                Yellowtail
              </h3>
              <p>
                {restaurantData[0].address}
              </p>
              <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Yellowtail+Japanese+Bistro/@40.8832847,-74.2924576,17z/data=!3m1!4b1!4m5!3m4!1s0x89c301b5a9fb3f49:0xea6239adc600b049!8m2!3d40.8832847!4d-74.2902689">View on Google Maps</a>
            </div>
          </InfoWindow>
        ) : !showInfoWindow }
      </GoogleMap>
    </div>
  );
}
export default Maps;