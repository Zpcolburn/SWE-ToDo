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

//   // TODO: create an event handler handler function that captures user input changes

//   // TODO: create an event handler function that takes user input and creates a new todo on form submission

//   // TODO: create a form with an input field and a button to add new todos to the list
//   return (
//     <Form>
//       <Row className="align-items-center">
//         <Col xs={10}>
//           <Form.Control style={{ width: '100%' }} />
//         </Col>
//         <Col xs={2}>
//           <Button variant="primary" className="w-100">
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
