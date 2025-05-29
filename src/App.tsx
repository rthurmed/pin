import { Provider as ReduxProvider } from "react-redux"
import { Page } from "./components/Page"
import { store } from "./store"

function App() {
  return (
    <ReduxProvider store={store}>
      <Page />
    </ReduxProvider>
  )
}

export default App
