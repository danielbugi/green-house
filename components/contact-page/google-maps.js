import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';

// 'AIzaSyCZtwzp0wybLs4jPcUbIg4Z315EsE4BAX0'

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 32.082413,
  lng: 34.778023,
};

const GoogleMaps = () => {
  const [forceRender, setForceRender] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCZtwzp0wybLs4jPcUbIg4Z315EsE4BAX0',
    nonce: '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!

    setMap(map);
  }, []);

  const onTilesLoaded = useCallback(function callback() {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
    }
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    // Trigger a re-render when the component mounts
    const timeOutID = setTimeout(() => {
      setForceRender(!forceRender);
    }, 500);
    return () => {
      clearTimeout(timeOutID);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  // useEffect(() => {
  //   if (isLoaded && !loadError) {
  //     console.log('Google Maps API loaded successfully');
  //   } else if (loadError) {
  //     console.error('Error loading google maps API', loadError);
  //   }
  // }, [isLoaded, loadError]);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onTilesLoaded={onTilesLoaded}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {forceRender && <Marker position={center} />}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default GoogleMaps;
