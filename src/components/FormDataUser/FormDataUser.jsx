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

  const {clearCart}=useContext(cartContext)
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

      clearCart()
      navigate('/item')
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
  height: 100vh;
  font-family: "Nightfully Haunted", sans-serif;
  font-size: 1.5rem;
  position: absolute;
  right: -35%;

  button{
          font-family: "Nightfully Haunted", sans-serif;
          font-size: 1.5rem;
          cursor:pointer;
          border: solid 1px black;
          border-radius: 5px;
          &:hover{
                    background-color: #509187;
          }
    }
`;

const Form = styled.form`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  background-color: transparent;
    backdrop-filter: blur(2px);
   
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s ease;
  background-color: transparent;

  &:focus {
    border-color: #03591c;
  }

  &:focus + label {
          top: -1rem;
    font-size: 1.5rem;
    color: #000001;
  }

  &.filled + label {
    top: -1rem;
    font-size: 1.5rem;
    color: #000001;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: #000000;
  pointer-events: none;
  transition: all 0.2s ease;
  padding: 0 5px;

  &.active {
    top: -1rem;
    font-size: 1rem;
    color: #000000;
  }
`;

