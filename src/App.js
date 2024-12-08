//import logo from './logo.svg';
//import './App.css';
import Header from './Header';
import Counter from './Counter';
import InputHandler from './InputHandler';
import DataFetcher from './DataFetcher';
import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(() => {
    // 초기 상태를 로컬 저장소에서 불러오기
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    //상태가 변경될 때 로컬 저장소에 저장
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };

  return (
    <div>
      <Header title="welcome to JSB's page" />
      <p>This is the content of the App component.</p>
      <h1>React State Example</h1>
      <Counter />
      <h1>React Event Handling Example</h1>
      <InputHandler />
      <h1>React API Data Fetching Example</h1>
      <DataFetcher />

      <h1>React Todo List Example</h1>
      <div>
        <button onClick={() => setFilter('all')}>모두</button>
        <button onClick={() => setFilter('active')}>진행중</button>
        <button onClick={() => setFilter('completed')}>완료</button>
      </div>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={getFilteredTodos()} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
      />

      <h1>To-Do List with Local Storage</h1>
      <div>
        <button onClick={() => setFilter('all')}>모두</button>
        <button onClick={() => setFilter('active')}>진행중</button>
        <button onClick={() => setFilter('completed')}>완료</button>
      </div>
      <AddTodo addTodo={addTodo} />
      <TodoList 
        todos={getFilteredTodos()} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
      />

      <h1>Filtered To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <TodoList
        todos={getFilteredTodos()}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;