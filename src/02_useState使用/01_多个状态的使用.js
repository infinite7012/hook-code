import React, { useState } from 'react';

export default function MultiHookState() {
  const [age, setAge] = useState(0);
  const [names, setNames] = useState(["张三", "李四"]);
  const [info, setInfo] = useState({name: "王五", age: 18});

  function addFriend() {
    names.push("李雷");
    console.log(names);
    setNames(names);
  }

  return (
    <div>
      <h2>当前年龄: {age}</h2>
      <button onClick={e => setAge(age + 1)}>age+1</button>
      <h2>朋友列表</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setNames([...names, "赵六"])}>添加好友</button>
      {/* 思考: 这样的方式是否可以实现 */}
      <button onClick={addFriend}>添加好友</button>
      <h2>我的信息:</h2>
      <div>我的名字: {info.name}</div>
      <button onClick={e => setInfo({...info, name: "王方"})}>修改名字</button>
    </div>
  )
}