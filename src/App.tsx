import { Game } from "./components/Game"

function App() {
  return (
    <div className='p-4 flex flex-col gap-8'>
      <h1 className='text-3xl font-bold text-center'>Pin Game</h1>
      <Game />
    </div>
  )
}

export default App
