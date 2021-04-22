import React, { useState,useEffect } from 'react'

export default function Rerender() {
    const [counter, setcounter] = useState(0)
    const [price, setprice] = useState(0)

    useEffect(() => {
        getPrice()
    }, [price])

    function getPrice() {
        console.log('getPrice触发')
        return price
    }
    return (
        <div>
            <h2>当前计数：{counter}</h2>
            <div>{getPrice()}</div>
            <button onClick={e => setcounter(counter + 1)}>+1</button>
            <button onClick={e => setprice(price + 1)}>+1</button>
        </div>
    )
}
