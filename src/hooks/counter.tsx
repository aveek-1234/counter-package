import React, { useState } from 'react'

function useCounter() {
  const [value, setValue] = useState(0);

  const increment=()=>{
    setValue(value+1);
  }

  const decrement=()=>{
    setValue(value-1);
  }

  return {value, increment, decrement}
}

export {useCounter};
