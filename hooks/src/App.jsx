import { useEffect, useState } from 'react'
import './App.css'
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [count, setCount] = useState(0);
  const previousCount = usePrev(count);

  // const [value, setValue] = useState("");
  // const debouncedValue = useDebounce(value, 300);

  // useEffect(() => {
  //   console.log("expensive function");
  // }, [debouncedValue])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(e => e + 1)}>Increment</button>
      <p>The previous value is {previousCount}</p>

      {/* <div>
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
      </div> */}
    </div>
  )
}

export default App
