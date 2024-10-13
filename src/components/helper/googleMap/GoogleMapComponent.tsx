"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import LoadingPage from "@/components/loading/loadingPage";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const centre = {
  lat: 37.437041393899676,
  lng: -4.191635586788259,
};

export const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      loadingElement={<LoadingPage />}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={centre} zoom={10}>
        <Marker position={centre} />
      </GoogleMap>
    </LoadScript>
  );
};

