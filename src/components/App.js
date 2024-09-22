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
    <div className="App" id='main'>
      <h1>React.useMemo</h1>
      <div>
        <h2>My todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button id='add-todo-btn' onClick={addTodo}>Add Todo</button>
        <div>
          <span id='incr-btn'>Count: {count+1}</span>
          <button id='incr-cnt' onClick={() => setCount(count + 1)}>1</button>
        </div>
      </div>

      <UseMemoExample count={count}/>
      <ReactMemoExample todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
