// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Button, Col, Form, Row } from 'react-bootstrap';
// import { createTodo, updateTodo } from '../api/todos';
// import { useAuth } from '../utils/context/authContext';

// const initialState = {
//   description: '',
//   isComplete: false,
//   createdAt: null,
// };

// export default function TodoForm({ todoObj = initialState, onUpdate }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const { user } = useAuth();

//   useEffect(() => {
//     setFormInput(initialState);
//   }, [todoObj]);

//   const handleChange = (e) => {
//     // TODO: <ake a handleChange event.
//   };

//   const handleSubmit = (e) => {
//    // TODO: Make a handleSubmit event.
//   };

//   return (
//   // TODO: Create a input field and a button to add new items to the list and to submit the item.
//     <Form onSubmit={}>

//     </Form>
//   );
// }

// TodoForm.propTypes = {
//   todoObj: PropTypes.shape({
//     description: PropTypes.string,
//     isComplete: PropTypes.bool,
//     firebaseKey: PropTypes.string,
//   }),
//   onUpdate: PropTypes.func.isRequired,
// };
