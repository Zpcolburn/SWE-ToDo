import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { createTodo, updateTodo } from '../api/todos';
import { useAuth } from '../utils/context/authContext';

const initialState = {
  description: '',
  isComplete: false,
};

export default function TodoForm({ todoObj = initialState, onUpdate }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  useEffect(() => {
    setFormInput(initialState);
  }, [todoObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid, createdAt: new Date() };
    createTodo(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateTodo(patchPayload).then(() => {
        setFormInput(initialState);
        onUpdate();
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control type="text" placeholder="What's next?" name="description" value={formInput.description} onChange={handleChange} required />
        </Col>
        <Col xs="auto">
          <Button type="submit" variant="primary">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

TodoForm.propTypes = {
  todoObj: PropTypes.shape({
    description: PropTypes.string,
    isComplete: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};
