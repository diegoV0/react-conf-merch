import { useState, useEffect } from 'react';
import axios from 'axios';

const useBuyerAddress = (address) => {
  const [map, setMap] = useState({});
  const API =
    'http://api.positionstack.com/v1/forward?access_key=66268ac0d3ccba1e0ceae24b2db8e33c&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC';

  useEffect(async () => {
    console.log(address);
    const response = await axios.get(API);
    setMap(response.data.data[0]);
    console.log(response.data.data[0]);
  }, []);
  return map;
};

export default useBuyerAddress;
