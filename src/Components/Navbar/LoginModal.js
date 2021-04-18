import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function LoginModal(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setUser({ ...user, [name]: val });
  };

  const text = props.login ? "Log in" : "Sign up";
  const variant = props.login ? "outline-dark" : "red";

  const handleSubmit = (e) => {
    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
      props.setShow(false);
    }
  };

  return (
    <Modal keyboard centered show={props.show} onHide={props.setShow}>
      <Modal.Header className="justify-content-center">
        <Modal.Title>{text}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          validated={validated}
          className="d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <Col md="8" className="text-center">
            <Form.Group controlId="username" hasValidation>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                required
                value={user.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Control
                type="text"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant={variant} type="submit">
              {text}
            </Button>
          </Col>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
