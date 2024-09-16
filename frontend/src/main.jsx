import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from './app/store.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
