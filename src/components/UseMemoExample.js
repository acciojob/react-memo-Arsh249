import React, { useMemo } from 'react';

function UseMemoExample({ count }) {
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    // Simulate a long calculation
    let sum = 0;
    for (let i = 0; i <= 100000; i++) {
      sum += i; // Some operation
    }
    return num + sum; // Modify the return value based on your logic
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
