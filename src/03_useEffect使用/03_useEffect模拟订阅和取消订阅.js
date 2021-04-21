import React, { useState, useEffect } from 'react';

export default function EffectHookClear() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("每次DOM更新时会回调");
    console.log('use effect...',count)
    const timer=setInterval(() => {
      setCount(count+1)
    }, 1000);
    return () => {
      console.log("DOM被移除时会回调");
      clearInterval(timer)
    }
  })

  return (
    <div>
      <h2>当前计数: {count}</h2>
    </div>
  )
}