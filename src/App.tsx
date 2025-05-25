import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex flex-col gap-2 justify-center items-center h-screen'>
        <h1 className='text-3xl'>Hello World</h1>
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </main>
    </>
  )
}

export default App
