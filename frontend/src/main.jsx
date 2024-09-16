import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'
import Authprovider from './context/useAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Authprovider>
      <App />
      </Authprovider>
    </NextUIProvider>
  </React.StrictMode>,
)