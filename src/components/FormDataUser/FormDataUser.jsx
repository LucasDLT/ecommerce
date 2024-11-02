import { useState } from "react";
import styled from "styled-components";
import ComponentButton from "../ComponentButton/ComponentButton";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export const FormDataUser = ({ cart, createOrder }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const { clearCart } = useContext(cartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !phone || !address) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const orders = {
      date: new Date(),
      buyer: {
        name,
        surname,
        email,
        phone,
        address,
      },
      items: cart,
    };

    try {
      createOrder(orders);

      setName("");
      setSurname("");
      setEmail("");
      setPhone("");
      setAddress("");
      setError("");

      clearCart();
      navigate("/item");
    } catch (err) {
      setError("Hubo un error al crear la orden, inténtalo nuevamente.");
      console.error(err);
    }
  };

  return (
    <FormContainer>
      <Form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <FormGroup>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={name ? "filled" : ""}
          />
          <Label className={name ? "active" : ""}>Nombre</Label>
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className={surname ? "filled" : ""}
          />
          <Label className={surname ? "active" : ""}>Apellido</Label>
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={email ? "filled" : ""}
          />
          <Label className={email ? "active" : ""}>Email</Label>
        </FormGroup>

        <FormGroup>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={phone ? "filled" : ""}
          />
          <Label className={phone ? "active" : ""}>Teléfono</Label>
        </FormGroup>

        <FormGroup>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className={address ? "filled" : ""}
          />
          <Label className={address ? "active" : ""}>Dirección</Label>
        </FormGroup>

        <ComponentButton onClick={handleSubmit}>
          Finalizar compra
        </ComponentButton>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 59.3vh;
  width: 20rem;
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  right: -35%;
  top: -0%;
  box-shadow: 0 4px 9px rgb(0, 0, 0);
  background-color: #596759a4;
  border-radius: 10px;
  padding: 1%;

  button {
    font-family: "Nightfully Haunted", sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 3rem;
    background-color: #50916b;
    &:hover {
      &:hover {
    box-shadow: 0 4px 9px rgb(0, 0, 0) ;
    transition: all 0.5s ease;}
    }
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  max-width: 400px;
  gap: 2rem;

`;

const FormGroup = styled.div`
  position: relative;
  left: -3%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 1px;
  font-size: 1rem;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease;
  background-color: #909b9160;
  border: 1px solid #000000;
  box-shadow: 2px 2px 5px rgb(0, 0, 0);

  

  &:focus + label {
    top: -1rem;
    font-size: 1.5rem;
  }

  &.filled + label {
    top: -1rem;
    font-size: 1.5rem;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  pointer-events: none;
  transition: all 0.2s ease;
  padding: 0 5px;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;

  &.active {
    top: -1rem;
    font-size: 1rem;
    color: #000000;
  }
`;
