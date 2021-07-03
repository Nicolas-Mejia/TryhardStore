import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";
import Message from "../components/Message";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z\s]+$/.test(city)) {
      setMessage("La ciudad tiene que ser solo letras");
    } else if (!/^[a-zA-Z\s]+$/.test(country)) {
      setMessage("El país tiene que ser solo letras");
    } else if (!isNumeric(postalCode)) {
      setMessage("El código postal tiene que ser solo numeros");
    } else if (postalCode.length !== 4) {
      setMessage("El código postal tiene que ser de un largo de 4 digitos");
    } else if (city.length < 5 || address.length < 5 || country.length < 5) {
      setMessage(
        "La dirección, la ciudad y el país tienen que tener un largo minimo de 5 caracteres"
      );
    } else {
      dispatch(saveShippingAddress({ address, city, postalCode, country }));
      history.push("/payment");
    }
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Envío</h1>
      {message && <Message variant="danger">{message}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dirección completa"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="margin">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ciudad"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Código Postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Código Postal"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country" className="margin">
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="País"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continuar
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
