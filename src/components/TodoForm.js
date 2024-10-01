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

  // Event handler for input changes
  const handleChange = (e) => {
    // Destructure 'name' and 'value' from the event target (input element)
    const { name, value } = e.target;

    // Update the form state with the new value for the input that was changed
    setFormInput((prevState) => ({
      ...prevState, // Spread operator copies all properties of the previous state (form inputs) into this object
      [name]: value, // Dynamically update the property that matches the input's 'name' with the new value
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (which would reload the page)
    e.preventDefault();

    // Create a payload object by spreading the current form input state into a new object
    // The spread operator copies all key-value pairs from 'formInput' into this object
    // Then, 'uid' and 'createdAt' are added as new properties
    const payload = { ...formInput, uid: user.uid, createdAt: new Date() };

    // Call the 'createTodo' function, passing in the payload, and wait for the promise to resolve
    createTodo(payload).then(({ name }) => {
      // Create a patch payload with the firebaseKey property
      // The spread operator isn't used here because we are directly assigning 'firebaseKey' as the only property
      const patchPayload = { firebaseKey: name };

      // Call 'updateTodo' to update the todo with the firebase key, then reset the form and trigger an update
      updateTodo(patchPayload).then(() => {
        setFormInput(initialState); // Reset the form input to its initial state
        onUpdate(); // Call a function to trigger any necessary updates after form submission
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
