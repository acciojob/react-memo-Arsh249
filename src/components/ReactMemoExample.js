import React, { useState } from 'react';

const ReactMemoExample = React.memo(({ todos, setTodos }) => {
  const [skill, setSkill] = useState('');

  const handleChange = (e) => {
    setSkill(e.target.value);
  };

  const addSkill = () => {
    if (skill.length > 5) {
      setTodos([...todos, skill]);
      setSkill('');
    }
  };

  console.log('Rendering React.memo component...');

  return (
    <div>
      <input type="text" id='skill-input' value={skill} onChange={handleChange} placeholder="Enter a skill" />
      <button id='skill-btn' onClick={addSkill}>Add Skill</button>
      <ul id='item-jumbotron'>
        {todos.map((todo, index) => (
          <li key={index} id={`todo-${index}`}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoExample;
