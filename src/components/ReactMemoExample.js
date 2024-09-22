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
      <input type="text" value={skill} onChange={handleChange} placeholder="Enter a skill" />
      <button id='skill-input' onClick={addSkill}>Add Skill</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoExample;
