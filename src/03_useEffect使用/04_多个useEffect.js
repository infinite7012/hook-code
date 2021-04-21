import React, { useState, useEffect } from 'react';

export default function MultiUseEffect() {
  const [counter, setCounter] = useState(0)
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    console.log("修改DOM", counter);
  },[counter])

  useEffect(() => {
    console.log("事件监听");
  }, [])

  useEffect(() => {
    console.log("网络请求");
  }, [])

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <h2>{isLogin ? '欢迎' : '未登录'}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}