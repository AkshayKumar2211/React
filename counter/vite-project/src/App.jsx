import React, { useState } from 'react'

const App = () => {
  const [count,setcount]=useState(1);

  const increment=()=>{
    setcount(count+1);
    //  setcount(count =>count+1);  handle the issue 
    //  setcount(count =>count+1);
    console.log(count)
  }

  let count1=0;

  const incre=()=>{ //Donot update the ui
    count1++;
    console.log(count1);
  }

  return (
    <div>
      <h1> Count {count}</h1>
      <h2>counts{count1}</h2>
      <button onClick={increment}>Count Increase</button>
      <button onClick={incre}>Count Increase</button>
    </div>
  )
}

export default App
