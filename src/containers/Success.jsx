import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useBuyerAddress from '../hooks/useBuyerAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useBuyerAddress(buyer[0].address);
  const isLocation = Object.keys(location).length;

  return (
    <>
      {isLocation > 0 ? (
        <div className="Success">
          <div className="Success-content">
            <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
            <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
            <div className="Success-map">
              <Map data={location} />
            </div>
          </div>
        </div>
      ) : (
        <h1>Cargando ... </h1>
      )}
    </>
  );
};

export default Success;
