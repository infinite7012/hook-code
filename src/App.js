import React, {createContext, useState} from 'react';
import Counter01 from './01_体验hooks/01_counter-class'
import Counter2 from './01_体验hooks/02_counter-hook'

import MultiHookState from './02_useState使用/01_多个状态的使用'

import ClassCounterChangeTitle from './03_useEffect使用/01_class实现title的修改'
import HookCounterChangeTitle from './03_useEffect使用/02_hook实现title的修改'
import EffectHookClear from './03_useEffect使用/03_useEffect模拟订阅和取消订阅'
import MultiUseEffect from './03_useEffect使用/04_多个useEffect'

import ContextClass from './04_useContext使用/01_class实现context'
import ContextHook from './04_useContext使用/02_ContextHook'

import Home from './05_useReducer使用/home'
import Profile from './05_useReducer使用/profile'

import RefHookDemo from './06_useRef使用/01_useRef引用dom'
import RefHookDemo02 from './06_useRef使用/02_useRef引用其他数据'

export const UserContext = createContext();
export const ThemeContext = createContext();
export default function App(){
    return (
      <div>
        {/* 1.体验hook */}
        {/* <Counter01></Counter01>
        <Counter2></Counter2> */}

        {/* 2.useState */}
        {/* <MultiHookState></MultiHookState> */}

        {/* 3.useEffect */}
        {/* <ClassCounterChangeTitle></ClassCounterChangeTitle> */}
        {/* <HookCounterChangeTitle></HookCounterChangeTitle> */}
        {/* <EffectHookClear></EffectHookClear> */}
        {/* <MultiUseEffect></MultiUseEffect> */}

        {/* 4.useContext */}
        <UserContext.Provider value={{ name: "why", age: 18 }}>
            <ThemeContext.Provider value={{ color: "red", fontSize: "20px" }}>
              <ContextClass></ContextClass>
            </ThemeContext.Provider>
        </UserContext.Provider>
        {/* <UserContext.Provider value={{ name: "why", age: 18 }}>
          <ThemeContext.Provider value={{ color: "red", fontSize: "20px" }}>
            <ContextHook />
          </ThemeContext.Provider>
        </UserContext.Provider> */}

        {/* 5.useContext */}
        {/* <Home></Home>
        <Profile></Profile> */}
        
        {/* 6.useRef */}
        {/* <RefHookDemo></RefHookDemo> */}
        {/* <RefHookDemo02></RefHookDemo02> */}
      </div>
    )
}
