// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Button, Col, Form, Row } from 'react-bootstrap';
// import { createTodo, updateTodo } from '../api/todos';
// import { useAuth } from '../utils/context/authContext';

// const initialState = {
//   description: '',
//   isComplete: false,
// };

// export default function TodoForm({ todoObj = initialState, onUpdate }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const { user } = useAuth();

//   useEffect(() => {
//     setFormInput(initialState);
//   }, [todoObj]);

//   // TODO: create a handleChange function that logs user input

//   // TODO: create a handleSubmit function that takes the user input and creates a new todo

//   // TODO: create a form with an input field and a button to add new todos to the list
//   return (

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
