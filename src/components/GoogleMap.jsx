import React from 'react'
import GoogleMapReact from 'google-map-react';


const GoogleMap = ({ center, zoom }) => {
    return (
        <div style={{ height: '300px', width: '300px' ,padding:'0px 0px 10px 0px'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBvEQe-g2uRbXpVrE6eIm2IxZYq64gmvNM' }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={{
              disableDefaultUI: true
            }}
          ></GoogleMapReact>
        </div>
      );
    };
    
    GoogleMap.defaultProps = {
      center: {
        lat: 37.7749,
        lng: -122.4194,
      },
      zoom: 11,
    };

export default GoogleMap