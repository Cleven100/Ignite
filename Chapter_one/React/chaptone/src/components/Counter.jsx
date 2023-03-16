import React, { useState } from 'react'

export const Counter = () => {

    const [value, setValue] = useState(0);

     function increment() {
       setValue(value + 1)
     }


  return (
    <div>
        <h2>{value}</h2>
        <button onClick={increment}>increment</button>
        <button onClick={() => {setValue(value === 0 ?  value :  value - 1)}}>decrement</button>
    </div>
  )
}
