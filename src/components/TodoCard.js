import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteTodo } from '../api/todos';

export default function TodoCard({ todoObj, onUpdate }) {
  const deleteThisTodo = () => {
    if (window.confirm(`Delete ${todoObj.description}?`)) {
      deleteTodo(todoObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{todoObj.description}</Card.Title>
        <Button variant="primary">Edit</Button>
        <Button variant="danger" onClick={deleteThisTodo}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

TodoCard.propTypes = {
  todoObj: PropTypes.shape({
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
