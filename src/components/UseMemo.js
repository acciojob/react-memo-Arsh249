import React, { useMemo } from 'react';

function UseMemoExample({ count }) {
  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{memoizedValue}</p>
    </div>
  );
}

export default UseMemoExample;
