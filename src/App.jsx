import { Provider } from "react-redux"
import AppRouter from "./router/AppRouter"
import { store } from "./App/store"

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
