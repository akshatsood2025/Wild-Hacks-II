import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import ListGroup from "react-bootstrap/ListGroup";

const containerStyle = {
  width: "700px",
  height: "600px",
};
let google = window.google;

function MyComponent(props) {
  const [origin, setOrigin] = React.useState(null);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setOrigin({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS,
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(null);
  const [distance, setDistance] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const [directionServiceResponse, setDirectionResponse] = useState(null);
  const [destination, setDestination] = React.useState(null);
  const { AnimalList } = props;

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(origin);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  async function calculateRoute() {
    console.log(google);
    if (!destination) {
      return;
    }
    const directionService = new google.maps.DirectionService();
    const results = await directionService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }
  const clearRoute = () => {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
  };
  const fun = (loc) => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${loc.latitude},${loc.longitude}&travelmode=driving&dir_action=navigate`;
    window.open(url, "_blank");
    //setDestination(loc);
    //calculateRoute();
  };
  return isLoaded ? (
    <div className="map-container">
      <div className="animallist">
        <ListGroup>
          {AnimalList.map((loc) => (
            <ListGroup.Item>
              latitude: {loc.latitude} longitude:{loc.longitude}
              <button
                className="ls-item"
                onClick={() => {
                  fun(loc);
                }}
              >
                find
              </button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      {/* <GoogleMap
        mapContainerStyle={containerStyle}
        center={origin}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {AnimalList.map((loc) => (
          <Marker position={loc} />
        ))}
        {directionServiceResponse && (
          <DirectionsRenderer directions={directionServiceResponse} />
        )}
      </GoogleMap> */}
    </div>
  ) : (
    <>.....Loading</>
  );
}

export default React.memo(MyComponent);

// import {
//     Box,
//     Button,
//     ButtonGroup,
//     Flex,
//     HStack,
//     IconButton,
//     Input,
//     SkeletonText,
//     Text,
//   } from '@chakra-ui/react'
//   import { FaLocationArrow, FaTimes } from 'react-icons/fa'

// import {
//   useJsApiLoader,
//   GoogleMap,
//   Marker,
//   Autocomplete,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import { useRef, useState } from "react";
// import ListGroup from "react-bootstrap/ListGroup";

// const center = {
//   lat: 25.2626854,
//   lng: 82.9836319,
// };

// const google = (window.google = window.google ? window.google : {});

// function App(props) {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries: ["places"],
//   });

//   const [map, setMap] = useState(/** @type google.maps.Map */ (null));
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState("");
//   const [duration, setDuration] = useState("");

//   const { AnimalList } = props.AnimalList;
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const [origin, setOrigin] = useState(center);
//   /** @type React.MutableRefObject<HTMLInputElement> */
//   const [destiantion, setDestination] = useState("");

//   if (!isLoaded) {
//     return <>...Loading</>;
//   }

//   async function calculateRoute() {
//     if (origin.value === "" || destiantion.value === "") {
//       return;
//     }
//     // eslint-disable-next-line no-undef
//     const directionsService = new google.maps.DirectionsService();
//     const results = await directionsService.route({
//       origin: origin,
//       destination: destiantion,
//       // eslint-disable-next-line no-undef
//       travelMode: google.maps.TravelMode.DRIVING,
//     });
//     setDirectionsResponse(results);
//     setDistance(results.routes[0].legs[0].distance.text);
//     setDuration(results.routes[0].legs[0].duration.text);
//   }

//   function clearRoute() {
//     setDirectionsResponse(null);
//     setDistance("");
//     setDuration("");
//     setOrigin("");
//     setDestination("");
//   }

//   return (
//     <div className="map-container">
//       <div className="animallist">
//         <ListGroup>
//           {AnimalList.map((loc) => (
//             <ListGroup.Item>
//               latitude: {loc.lat} longitude:{loc.lng}
//               <button
//                 onClick={() => {
//                   setDestination(loc);
//                   calculateRoute();
//                 }}
//               >
//                 find
//               </button>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </div>
//       <GoogleMap
//         center={center}
//         zoom={15}
//         mapContainerStyle={{ width: "100%", height: "100%" }}
//         options={{
//           zoomControl: false,
//           streetViewControl: false,
//           mapTypeControl: false,
//           fullscreenControl: false,
//         }}
//         onLoad={(map) => setMap(map)}
//       >
//         {AnimalList.map((loc) => (
//           <Marker position={loc} />
//         ))}
//         {directionsResponse && (
//           <DirectionsRenderer directions={directionsResponse} />
//         )}
//       </GoogleMap>
//     </div>
//   );
// }

// export default App;
