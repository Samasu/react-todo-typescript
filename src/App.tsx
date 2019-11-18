import React from 'react';
import { TodoListItem } from "./TodoListItem";
import './App.css';


const todos: Array<Todo> = [
  {text: "walk the dog", complete: true },
  {text: "Write app", complete: false } 
];


const App: React.FC = () => {
  return <TodoListItem todo={todos[0]} />;
};


export default App;
