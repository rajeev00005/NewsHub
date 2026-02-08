import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container className="my-5">
    <h2>Contact Us</h2>
    <p>Have questions, feedback, or partnership inquiries? Fill out the form below or email us at <a href="mailto:contact@newshub.com">contact@newshub.com</a>.</p>
    <Form>
      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
      </Form.Group>
      <Button variant="primary" type="submit" disabled>
        Send (Demo Only)
      </Button>
    </Form>
  </Container>
);

export default Contact;
