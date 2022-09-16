import { useMemo } from "react";
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default function Home (){
 const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    if (!isLoaded) return <div>Loading...</div>
    return (
    <>
    <h1>Restuarants Nearby</h1>
    <Map />  
    </>
    );
}

function Map() {

    const center = useMemo(() => ({ lat:35.2271, lng:80.8431 }), []);
    return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-conatiner">
        <Marker position={center} />
     </GoogleMap>
     );
}