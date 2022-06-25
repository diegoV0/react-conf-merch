import { useState, useEffect } from 'react';
import axios from 'axios';

const useBuyerAddress = (address) => {
  const [map, setMap] = useState({});
  const apiKey = process.env.CLIENT_ID_POSITIONSTACK;
  const API = `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${address}`;

  useEffect(async () => {
    const response = await axios.get(API);
    setMap(response.data.data[0]);
  }, []);
  return map;
};

export default useBuyerAddress;
