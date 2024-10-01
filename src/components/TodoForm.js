// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Button, Col, Form, Row } from 'react-bootstrap';
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

//   // TODO: create a handleChange handler function that logs user input changes

//   // TODO: create a handleSubmit handler function that takes user input and creates new todo on form submission

//   // TODO: create a form with an input field and a button to add new todos to the list
//   return (
//     <Form>
//       <Row className="align-items-center">
//         <Col xs="auto">
//           <Form.Control />
//         </Col>
//         <Col xs="auto">
//           <Button variant="primary">
//             Add
//           </Button>
//         </Col>
//       </Row>
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
