import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import { deleteTodo, updateTodo } from '../api/todos';

export default function TodoCard({ todoObj, onUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState(todoObj.description);

  const deleteThisTodo = () => {
    if (window.confirm(`Delete ${todoObj.description}?`)) {
      deleteTodo(todoObj.firebaseKey).then(() => onUpdate());
    }
  };

  const handleClick = () => {
    const updatedTodo = { ...todoObj, isComplete: !todoObj.isComplete };
    updateTodo(updatedTodo).then(() => onUpdate());
  };

  const handleSave = () => {
    const updatedTodo = { ...todoObj, description: newDescription };
    updateTodo(updatedTodo).then(() => {
      setEditMode(false);
      onUpdate();
    });
  };

  return (
    <Card bg="dark" text="light" className="mb-2">
      <Card.Body>
        {editMode ? <Form.Control type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="mb-2" /> : <Card.Title>{todoObj.description}</Card.Title>}

        <Button variant={todoObj.isComplete ? 'success' : 'warning'} className="me-2" onClick={handleClick}>
          {todoObj.isComplete ? '✅ Completed' : '✔ Mark as Complete'}
        </Button>

        {editMode ? (
          <>
            <Button variant="success" className="me-2" onClick={handleSave}>
              💾 Save
            </Button>
            <Button variant="secondary" onClick={() => setEditMode(false)}>
              ❌ Cancel
            </Button>
          </>
        ) : (
          <>
            <Button variant="info" className="me-2" onClick={() => setEditMode(true)}>
              🖊 Edit
            </Button>
            <Button variant="danger" onClick={deleteThisTodo}>
              ❌ Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

TodoCard.propTypes = {
  todoObj: PropTypes.shape({
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    isComplete: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
