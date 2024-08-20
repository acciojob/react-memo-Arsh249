import React, { useState } from 'react';
import UseMemoExample from './UseMemoExample';
import ReactMemoExample from './ReactMemoExample';

function App() {
  const [todos, setTodos] = useState(['New Todo']);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, 'New Todo']);
  };

  return (
    <div className="App">
      <h1>React.useMemo</h1>
      <div>
        <h2>My todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
        <div>
          <span>Count: {count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      <UseMemoExample />
      <ReactMemoExample />
    </div>
  );
}

export default App;
