'use client';

import { useEffect, useState } from 'react';
import { getTodos } from '../api/todos';
import TodoCard from '../components/TodoCard';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const getAllTodos = () => {
    getTodos().then(setTodos);
  };

  useEffect(() => {
    getAllTodos();
  });

  return (
    <>
      {todos.map((todo) => (
        <TodoCard key={todo.firebaseKey} todoObj={todo} onUpdate={getAllTodos} />
      ))}
    </>
  );
}
