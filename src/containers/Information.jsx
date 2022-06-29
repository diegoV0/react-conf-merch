import React, { useRef, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const [errors, setErrors] = useState({});
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useNavigate();

  const validateFormBuyer = (buyer) => {
    let validateStatus = true;
    let errores = {};

    if (buyer.name.length < 5) {
      errores.name = 'El campo Nombre Completo es requerido';
      validateStatus = false;
    }
    if (buyer.email.length < 1) {
      errores.email = 'El campo Correo Electronico es requerido';
      validateStatus = false;
    }
    if (buyer.address.length < 1) {
      errores.address = 'El campo Direccion es requerido';
      validateStatus = false;
    }
    if (buyer.apto.length < 1) {
      errores.apto = 'El campo Apto es requerido';
      validateStatus = false;
    }
    if (buyer.city.length < 1) {
      errores.city = 'El campo Ciudad es requerido';
      validateStatus = false;
    }
    if (buyer.country.length < 1) {
      errores.country = 'El campo Pais es requerido';
      validateStatus = false;
    }
    if (buyer.state.length < 1) {
      errores.state = 'El campo Estado es requerido';
      validateStatus = false;
    }
    if (buyer.cp.length < 1) {
      errores.cp = 'El campo Codigo Postal es requerido';
      validateStatus = false;
    }
    if (buyer.phone.length < 1) {
      errores.phone = 'El campo Telefono es requerido';
      validateStatus = false;
    }

    if (!validateStatus) {
      setErrors({
        ...errores,
      });
    }
    return validateStatus;
  };

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    if (validateFormBuyer(buyer)) {
      addToBuyer(buyer);
      console.log(buyer);
      history('/checkout/payment');
    } else {
      console.log(errors);
      alert(errors.name);
    }
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
