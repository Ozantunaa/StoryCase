import Home from './src/screens/Home'
import { store } from './src/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
