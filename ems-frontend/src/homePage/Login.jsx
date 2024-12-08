import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Button to trigger modal */}
      <a href="#" className="text-light" onClick={handleShow}>
        <small><i className="fa fa-sign-in-alt me-2"></i>Đăng nhập</small>
      </a>

      {/* React-Bootstrap Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên đăng nhập" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Đăng nhập
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
