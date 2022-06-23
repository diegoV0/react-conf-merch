import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU9Orw`;

  useEffect(async () => {
    console.log(address);
    try {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    } catch {
      console.log('ERROR API GOGOLE MAPS');
    }
  }, []);
  return map;
};

export default useGoogleAddress;
