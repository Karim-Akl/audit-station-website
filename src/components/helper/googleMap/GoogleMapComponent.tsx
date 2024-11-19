"use client";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import LoadingPage from "@/components/loading/loadingPage";
import { fetchData } from "@/lib/api/fetchData";
import axios from "axios";
import { BASE_URL } from "@/lib/actions/actions";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export const GoogleMapComponent = () => {
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/public/settings`);
        setSettings(response?.data?.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
    fetchSettings();
  }, []);


  const centre = {
    lat: settings?.latitude,
    lng: settings?.longitude,
  };

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

