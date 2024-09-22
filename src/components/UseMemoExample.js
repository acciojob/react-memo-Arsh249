import React, { useMemo } from 'react';

function UseMemoExample({ count }) {
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    // Simulate a long calculation
   
    return 1000000000; // Modify the return value based on your logic
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p id='calc'>{memoizedValue}</p>
    </div>
  );
}

export default UseMemoExample;
