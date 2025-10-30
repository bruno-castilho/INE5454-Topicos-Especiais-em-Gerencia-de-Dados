import { useState } from 'react'
import Homepainel from "./pages/Homepainel";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepainel />
    </>
  )
}

export default App
