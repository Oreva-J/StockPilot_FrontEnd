import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from '../router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
//import theme from "../src/utils/theme"

axios.default({withCredentials: true})



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      
    </Provider>
  </StrictMode>,
)
