import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App'

export default function ContextHook() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2 style={theme}>用户: {user.name}</h2>
      <h2 style={theme}>用户年龄: {user.age}</h2>
    </div>
  )
}