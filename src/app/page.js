'use client';

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getTodos } from '../api/todos';
import TodoCard from '../components/TodoCard';
import TodoForm from '../components/TodoForm';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const getAllTodos = () => {
    getTodos().then((fetchedTodos) => {
      const sortedTodos = fetchedTodos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setTodos(sortedTodos);
    });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          <TodoForm onUpdate={getAllTodos} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8} lg={6}>
          {todos.map((todo) => (
            <TodoCard key={todo.firebaseKey} todoObj={todo} onUpdate={getAllTodos} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
