import React, { useState, useEffect } from 'react';

export default function HookCounterChangeTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `当前计数: ${count}`;
  })

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}