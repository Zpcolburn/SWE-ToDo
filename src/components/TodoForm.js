import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { createTodo, updateTodo } from '../api/todos';

const initialState = {
  title: '',
  description: '',
  isComplete: false,
};

export default function TodoForm({ todoObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoObj.firebaseKey) {
      updateTodo(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput };
      createTodo(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateTodo(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Control type="text" placeholder="What's next?" name="description" value={formInput.description} onChange={handleChange} required />
        </Col>
        <Col xs="auto">
          <Button type="submit">{todoObj.firebaseKey ? 'Update' : 'Add'} todo</Button>
        </Col>
      </Row>
    </Form>
  );
}

TodoForm.propTypes = {
  todoObj: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    isComplete: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

TodoForm.defaultProps = {
  todoObj: initialState,
};
